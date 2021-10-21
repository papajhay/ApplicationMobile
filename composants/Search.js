import React from 'react';
import {TextInput, StyleSheet, SafeAreaView, Button} from 'react-native';
import style from './Style';
import {createStackNavigator} from '@react-navigation/stack';
import List from './List';

const Stack = createStackNavigator();

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: 'Maroc',
    };
  }

  setCity(pays) {
    this.setState({
      city: pays,
    });
  }

  // fonction qui affiche les resultats de la recherche
  submit() {
    this.props.navigation.navigate('Result', {city: this.state.city});
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setCity(text)}
          value={this.state.city}
        />
        <Button
          title="Rechercher une ville"
          color={style.color}
          onPress={() => this.submit()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFFFFF',
        headerStyle: {backgroundColor: '#dc143c'},
      }}>
      <Stack.Screen
        name="Rechercher"
        component={Search}
        options={{title: 'Rechercher une region'}}
      />
      <Stack.Screen
        name="Result"
        component={List}
        options={{
          title: 'Météo /  ',
        }}
      />
    </Stack.Navigator>
  );
}
