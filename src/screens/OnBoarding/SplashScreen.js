import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, Image, StatusBar} from 'react-native';

const SplashScreen = ({params}) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('onboarding');
    }, 1000);
  });
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#F8FAFC'}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View>
        <Image
          source={require('../../assets/images/spotify.png')}
          style={{
            width: 196,
            height: 59,
            alignSelf: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
