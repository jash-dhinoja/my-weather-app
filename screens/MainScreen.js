import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WeatherCard from './WeatherCard'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderView from './HeaderView';

const MainScreen = () => {

    const refresIcon = () => <Icon name="refresh-outline" size={30} />;

    const [cards, setCards] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        callWeatheAPI()
    }, [])

    const callWeatheAPI = React.useCallback(() => {
        setIsRefreshing(true)
        // Please insert your api key below
        const apiKey = ""
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=oakville&days=5&aqi=no&alerts=no`
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
    }, []);

    const renderItem = (item) => {
        return <WeatherCard data={item}/>
    }


    return (
        // Main Container
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={{ padding: 16, flexDirection: 'row' }}>
                {/* <Text style={styles.header}>
                    Oakville
                </Text>
                <View style ={{flex: 1}} />
                <TouchableOpacity onPress={callWeatheAPI}>
                    <View style={styles.refreshFAB}>
                        <Icon name="refresh-outline" size={24} />
                    </View>
                </TouchableOpacity> */}
                <HeaderView/>
            </View>
            {/* Card Container */}
            {cards ? (
            <FlatList
            data = {cards}
            renderItem = {({item})=> renderItem(item)}
            keyExtractor={(_,indx) => indx}
            refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={callWeatheAPI} />
                }
            />
            ): (
                <ActivityIndicator/>
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

