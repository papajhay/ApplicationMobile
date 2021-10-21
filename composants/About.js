import React from 'react';
import {Text, View, Button} from 'react-native';
import style from './Style';

export default class About extends React.Component {
  // static navigationOptions = {
  //   tabBarIcon: () => {
  //     return (
  //       <Image
  //         source={require('./icons/home.png')}
  //       />
  //     );
  //   },
  // };

  // fonction pour naviguer vers la page Search.js
  goToSearch() {
    this.props.navigation.navigate('Rechercher');
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <Text style={{fontSize: 25, color: '#694fad'}}>
          A propos de l'application
        </Text>
        <Text style={{marginVertical: 30}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Button
          title="to research"
          onPress={() => this.goToSearch()}
          color={style.color}
        />
      </View>
    );
  }
}
