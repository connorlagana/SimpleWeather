import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios'

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      temp: '',
      feelsLike: '',
      main: ''
    }

  }
  async fetchWeatherData() {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Seattle&apikey=4e18a7bd71bb6257607ec44ce1dfe75c`)

    const tempInKelvin = res.data.main.temp
    const feelsLikeKelvin = res.data.main.feels_like

    const tempInF = Math.round((tempInKelvin - 273.15) * 9 / 5 + 32)
    const feelsLikeF = Math.round((feelsLikeKelvin - 273.15) * 9 / 5 + 32)

    this.setState({
      name: res.data.name,
      temp: tempInF,
      feelsLike: feelsLikeF,
      main: res.data.weather[0].main,
      description: res.data.weather[0].description
    })

  }

  componentDidMount() {
    this.fetchWeatherData()
  }

  render() {
    return (
      <View style={styles.weatherContainer} >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={48} name="weather-night" color={'#fff'} />
          <Text style={styles.cityText}>{this.state.name}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.temp}>{this.state.temp}°</Text>
          <Text style={styles.subtitle}>{this.state.description}</Text>
        </View>
      </View>
    );
  }
};



const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#4e6696'
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