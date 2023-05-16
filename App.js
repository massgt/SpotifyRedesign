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
import ArtistPage from './src/screens/Like/Like';
import Profile from './src/screens/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingRegister from './src/screens/Register/OnBoardingRegister';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MusicPage from './src/screens/MusicPage/MusicPage';
import Lyrics from './src/screens/Lyrics';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = ({VisibilityTab}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{}}>
              {focused ? (
                <View style={styles.barIcon}>
                  <Image
                    source={require('./src/assets/icons/home-active.png')}
                    style={{width: 24, height: 23, marginTop: 12}}
                  />
                </View>
              ) : (
                <Image
                  source={require('./src/assets/icons/home-inactive.png')}
                  style={{width: 24, height: 23}}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <View style={styles.barIcon4}>
                  <Image
                    source={require('./src/assets/icons/explore-active.png')}
                    style={{width: 24, height: 23, marginTop: 12}}
                  />
                </View>
              ) : (
                <Image
                  source={require('./src/assets/icons/explore-inactive.png')}
                  style={{width: 24, height: 23}}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Artist-Page"
        component={ArtistPage}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <View style={styles.barIcon4}>
                  <Image
                    source={require('./src/assets/icons/heart-active.png')}
                    style={{width: 24, height: 23, marginTop: 12}}
                  />
                </View>
              ) : (
                <Image
                  source={require('./src/assets/icons/heart-inactive.png')}
                  style={{width: 24, height: 23}}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <View style={styles.barIcon4}>
                  <Image
                    source={require('./src/assets/icons/profile-active.png')}
                    style={{width: 24, height: 23, marginTop: 12}}
                  />
                </View>
              ) : (
                <Image
                  source={require('./src/assets/icons/profile-inactive.png')}
                  style={{width: 24, height: 23}}
                />
              )}
            </>
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
          <Stack.Navigator initialRouteName="Home">
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
                component={BottomTab}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="Home"
              />
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
                component={Lyrics}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                  headerShown: false,
                }}
                name="lyrics"
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
  barIcon: {
    backgroundColor: '#42C83C',
    height: 5,
    marginTop: -24,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  barIcon4: {
    backgroundColor: '#42C83C',
    height: 5,
    marginTop: -43,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
});

export default App;
