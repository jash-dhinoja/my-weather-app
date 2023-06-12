import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

const HeaderView = () => {


    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    }
})

export default HeaderView;