import React from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import style from './Style';
import axios from 'axios';
import moment from 'moment'; //Pour rendre la date
import 'moment/locale/fr'; //Pour rendre la date en français

moment.locale('fr');

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: this.props.navigation.getState().routes[1].params.city,
      report: null,
    };
    console.log(this.props.navigation.getState().routes[1].params.city);
    this.fetchWeather();
  }

  fetchWeather() {
    axios
      .get(
        `http:/api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&units=metric&cnt=7&appid=94c6cf0868fa5cb930a5e2d71baf0dbf`,
      )
      .then(response => {
        // console.log(response.data.city.name);
        this.setState({report: response.data});
      });
  }

  //fonction pour afficher le jour
  day(jour) {
    let day = moment(jour.dt * 1000).format('ddd');
    return <Text style={[styles.white, styles.bold]}>{day.toUpperCase()}</Text>;
  }

  //fonction pour afficher la date complet
  dated(date) {
    let day = moment(date.dt * 1000).format('DD/MM/YYYY');
    return <Text style={styles.color}>{day}</Text>;
  }

  //fonction pour afficher les icones de la météo
  icon(img) {
    const meteo = img.weather[0].main.toLowerCase();
    let image;
    switch (meteo) {
      case 'clouds':
        image = require('../iconsWeather/cloudy.png');
        break;
      case 'rain':
        image = require('../iconsWeather/rain.png');
        break;
      default:
        image = require('../iconsWeather/sun.png');
        break;
    }
    return <Image source={image} style={{width: 80, height: 90}} />;
  }

  render() {
    if (this.state.report === null) {
      return <ActivityIndicator size="large" color={style.color} />;
    } else {
      return (
        <SafeAreaView>
          <FlatList
            data={this.state.report.list}
            renderItem={({item}) => (
              <View style={[styles.view, styles.flex]}>
                <View style={styles.flex}>
                  {this.icon(item)}
                  <Text style={{marginLeft: 15, fontSize: 17}}>
                    {this.day(item)} {this.dated(item)}
                  </Text>
                </View>
                <Text style={styles.temp}>{Math.round(item.temp.day)}°C</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  white: {
    color: '#FFFF',
  },
  bold: {
    fontWeight: 'bold',
  },
  color: {
    color: 'rgb(180, 180, 180)',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    backgroundColor: '#394163',
    borderWidth: 0,
    borderBottomColor: '#202340',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  temp: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
