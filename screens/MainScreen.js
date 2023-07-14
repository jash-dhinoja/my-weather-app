import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WeatherCard from './WeatherCard'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderView from './HeaderView';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

const MainScreen = () => {

    const refresIcon = () => <Icon name="refresh-outline" size={30} />;

    const [cards, setCards] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [city, setCity] = useState({ title: "oakville" })

    const isSearching = useSharedValue(false)

    useEffect(() => {
        callWeatheAPI()
    }, [city])

    const callWeatheAPI = useCallback(() => {
        setIsRefreshing(true)
        // Please insert your api key below
        const apiKey = ""
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.title}&days=5&aqi=no&alerts=no`
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                const list = []
                responseData.forecast.forecastday.forEach(forecast => {
                    list.push(forecast)
                });
                setCards([...list])
                setIsRefreshing(false)
            })
            .catch((err) => Alert.alert(`Error Occured${err}`))
    }, [city]);

    const renderItem = (item) => {
        return <WeatherCard data={item} />
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: "100%",
            flex: isSearching.value ? withTiming(0, { duration: 300 }) : withTiming(1, { duration: 300 }),
            transform: [{ translateY: isSearching.value ? withTiming(0, { duration: 300 }) : withTiming(-36, { duration: 300 }) }],
            opacity: isSearching.value ? withTiming(1, { duration: 300 }) : withTiming(0, { duration: 300 })
        }
    })

    const onSearchPress = useCallback(
        () => {
            callWeatheAPI()
            isSearching.value = !isSearching.value
        },
        [],
    )

    return (
        // Main Container
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.header}>
                        {city.title}
                    </Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity onPress={onSearchPress}>
                        <View style={styles.refreshFAB}>
                            <Icon name="search-outline" size={24} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Animated.View style={[{ zIndex: -1, elevation: -1, paddingTop: 8 }, animatedStyles]}>
                    <HeaderView setCity={setCity} isSearching={isSearching} />
                </Animated.View>
                {/* Card Container */}
            </View>
            {cards ? (
                <FlatList
                    data={cards}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(_, indx) => indx}
                    refreshControl={
                        <RefreshControl refreshing={isRefreshing} onRefresh={callWeatheAPI} />
                    }
                />
            ) : (
                <ActivityIndicator />
            )}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#ECECEC"
    },
    cardContainer: {
        flex: 1,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    refreshFAB: {
        width: 32,
        height: 32,

        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MainScreen

