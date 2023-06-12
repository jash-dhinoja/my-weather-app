import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { iconMap } from '../Contansts'

const WeatherCard = ({ data }) => {

    const date = data.date
    const { maxtemp_c: high, mintemp_c: low, totalprecip_in: pop, condition } = data.day

    /**
     * Gets day of the week from date
     * @returns number
     */
    const getDay = () => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndx = new Date(date).getDay()
        return weekday[dayIndx == 6 ? 0 : dayIndx + 1]
    }

    /**
     * Gets name of the mmonth from date
     * @returns number
     */
    const getMonth = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndx = new Date(date).getMonth() + 1
        return monthNames[monthIndx]
    }

    /**
     * Gets day of the month from date
     * @returns number
     */
    const getDate = () => {
        return new Date(date).getDate() + 1
    }

    /**
     * Gets Icon source from reponse icon code
     * @returns Icon source
     */
    const getIcon = () => {
        const arr = condition.icon.split("/")
        return iconMap[arr.slice(-1)]
    }

    return (
        // Card container
        <View style={styles.cardContainer}>
            {/* Card */}
            <View style={[styles.card, { flexDirection: 'row', alignItems: 'center' }]}>
                {/* Date and pop container */}
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>
                        {getDay()}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '300' }}>
                        {getMonth()}, {getDate()}
                    </Text>
                    <View style={{ flex: 1 }} />
                    <Text><Text style={{ fontWeight: '600' }}>Precipitation:</Text> {pop} in</Text>
                </View>

                {/* Spacer */}
                <View style={{ flex: 1 }} />
                {/* Weather Icon */}
                <Image style={{ width: 64, height: 64 }} resizeMode='contain' source={getIcon()} />

                {/* High and low temp label container */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.tempLabel}>{high}°</Text>
                    <Text style={styles.tempLabel}>{low}°</Text>
                </View>
            </View>
        </View>
    )
}

export default WeatherCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 16,
    },
    card: {
        backgroundColor: '#f0edee',
        width: '100%',
        height: 108,
        borderRadius: 20,
        padding: 16,

        shadowOffset: { x: 0, y: 0 },
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 4
    },
    horizontalContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        width: 64,
        height: 64,
    },
    tempLabel: {
        fontSize: 16,
        fontWeight: '300',
        padding: 4
    }
})

// <View style={styles.card}>
//                 <View style={styles.horizontalContainer}>

//                     <View>
//                         <Text style={{ fontSize: 18, fontWeight: '500' }}>
//                             {getDay()}
//                         </Text>
//                         <Text style={{ fontSize: 14, fontWeight: '300' }}>
//                             {getMonth()}, {getDate()}
//                         </Text>
//                     </View>

//                     {/* Spacer */}
//                     <View style={{ flex: 1 }} />
//                     <Image style={{width: 64, height: 64}} resizeMode='contain' source={getIcon()} />
//                 </View>

//                 {/* Spacer */}
//                 <View style={{ flex: 1 }} />

//                 <View style={styles.horizontalContainer}>
//                     <Text style={{ fontWeight: '300' }}>
//                         <Text style={{ fontWeight: "600" }}>H:</Text> {high}° <Text style={{ fontWeight: "600" }}>L:</Text> {low}°
//                     </Text>
//                     <View style={{ flex: 1 }} />
//                     <Text style={{ fontWeight: '400' }}>{Math.round(pop * 100)}%</Text>
//                 </View>
//             </View>