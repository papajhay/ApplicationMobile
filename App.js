import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import About from './composants/About';
import Search from './composants/Search';
import {Image} from 'react-native';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={About} />
//         <Tab.Screen name="Settings" component={Search} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const Tab = createMaterialBottomTabNavigator();
//Ato am Dev1 Za
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="About"
          barStyle={{backgroundColor: '#dc143c'}}>
          <Tab.Screen
            name="Apropos"
            component={About}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require('./icons/about.png')}
                    style={{width: 25, height: 25}}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Rechercher"
            component={Search}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require('./icons/home.png')}
                    style={{width: 25, height: 25}}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
