import 'react-native-gesture-handler';
import React, {Component} from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from './src/screens/OnBoarding/SplashScreen';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import Home from './src/screens/Home/Home';
import Explore from './src/screens/Explore/Explore';
import Like from './src/screens/Like/Like';
import Profile from './src/screens/Profile/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingRegister from './src/screens/Register/OnBoardingRegister';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MusicPage from './src/screens/MusicPage/MusicPage';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const BottomTab = ({VisibilityTab}) => {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarIcon: (
            <View>
              <Image source={require('./src/assets/icons/home-active.png')} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarIcon: (
            <View>
              <Image
                source={require('./src/assets/icons/profile-active.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splased">
            <React.Fragment>
              <Stack.Screen
                component={SplashScreen}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="splashed"
              />
              <Stack.Screen
                component={OnBoarding}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="onboarding"
              />
              <Stack.Screen
                component={OnBoardingRegister}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="onboarding-register"
              />
              <Stack.Screen
                component={Register}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="register"
              />
              <Stack.Screen
                component={Login}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="login"
              />
              <Stack.Screen
                component={Home}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="home">
                {/* {props => <BottomTab {...props} />} */}
              </Stack.Screen>
              <Stack.Screen
                component={MusicPage}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="music-page"
              />
              <Stack.Screen
                component={Profile}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="profile"
              />
            </React.Fragment>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
