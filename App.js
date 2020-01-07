import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios'

const Weather = () => {

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <Text style={styles.cityText}>San Antonio</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.temp}>82°</Text>
        <Text style={styles.subtitle}>Sunny all day!</Text>
      </View>
    </View>
  );
};

async function fetchWeatherData() {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&apikey=4e18a7bd71bb6257607ec44ce1dfe75c`,
    );
    let responseJson = await response.json()
    console.log(responseJson)
    return responseJson;
  } catch (error) {
    console.error(error)
  }

}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b033'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  temp: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;