import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import Animated, { clockRunning, useSharedValue } from 'react-native-reanimated';


const HeaderView = ({ setCity, isSearching }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let apiKey = "NfwQlcVvdEB12KT2/Qk6SQ==6VtvgwgRUoogT4my"
        let url = `https://countriesnow.space/api/v0.1/countries/cities`
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ country: "canada" }),
            redirect: 'follow'
        })
            .then((response) => response.json())
            .then((responseData) => {
                const answer = responseData.data.map((city, indx) => ({
                    id: indx,
                    title: city
                }))
                setData([...answer])
            })
    }, [])
    // let a= require('country-state-city').City;
    // console.log(a.getAllCities()[0])

    return (
        <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            onSelectItem={(val) => {
                isSearching.value = false
                val ? setCity(val) : setCity({ title: "Oakville" })
            }}
            dataSet={data}
            textInputProps={{
                placeholder: 'Enter city name within Canada',
                placeholderTextColor: 'light gray',
                autoCorrect: false,
                autoCapitalize: 'none',
                style: {
                    borderRadius: 25,
                    backgroundColor: '#E6E6E8',
                    color: '#737377',
                    paddingLeft: 18,
                },
            }}
            rightButtonsContainerStyle={{
                right: 8,
                height: 30,

                alignSelf: 'center',
            }}
            inputContainerStyle={{
                backgroundColor: '#E6E6E7',
                borderRadius: 25,
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HeaderView;