# Weather App

A weather application that shows a 5-day forecast of the highest and lowest temperature of the respective day alongside an image depicting the overall weather of the day and precipitation in inches. The app also allows the user to search for regions within Canada to retrieve their forecast.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [API](#api)
- [Contributing](#contributing)

## Introduction

This is a weather application built using the Expo managed workflow. It provides a user-friendly interface to retrieve and display weather forecast information for regions within Canada. The app utilizes the WeatherAPI to fetch weather data and provides a 5-day forecast of the highest and lowest temperature, along with an image representing the overall weather and precipitation in inches.

## Features

- 5-day weather forecast with highest and lowest temperature.
- Image representation of the overall weather condition.
- Display of precipitation in inches.
- Search functionality to retrieve weather forecast for regions within Canada.
- Auto-complete dropdown for location search.
- Smooth animations using React Native Reanimated.
- Asynchronous tasks performed using async/await.
- Data loading using useEffect hooks.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```
2. Change to the project directory:
```
cd weather-app
```

3. Install dependencies:
```
npm install
```

## Usage
1. Start the Expo development server:

```
npx expo start
```
2. Use the Expo Go app on your mobile device or an emulator to scan the QR code displayed in the terminal to launch the app.

## Dependencies
The following dependencies are used in this project:

* [Expo](https://expo.dev/)
* [React Native](https://reactnative.dev/)
* [react-native-autocomplete-dropdown](https://github.com/onmotion/react-native-autocomplete-dropdown)
* [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)

For a complete list of dependencies, please refer to the `package.json` file.

## API
This project uses the **WeatherAPI** to fetch weather forecast data. You can find more information about the API [here](https://www.weatherapi.com/).

To use the API, you will need to sign up for an account and obtain an API key. The API key should be inserted below in the `MainScreen.js`:

```bash
const callWeatheAPI = useCallback(() => {
        setIsRefreshing(true)
        // Please insert your api key below
        const apiKey = ""
```

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive * commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.
