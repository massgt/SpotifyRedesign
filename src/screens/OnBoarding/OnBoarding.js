import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyle} from '../../style/globalStyle';

const OnBoarding = ({params}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ImageBackground
        source={require('../../assets/images/bg-start.png')}
        style={{width: 390, height: 849, position: 'absolute'}}
      />
      <Image
        source={require('../../assets/images/spotify.png')}
        style={{width: 196, height: 59, marginTop: 43, alignSelf: 'center'}}
      />
      <View
        style={{
          marginHorizontal: 30,
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexGrow: 1,
          marginBottom: 60,
        }}>
        <Text style={{...globalStyle.Satoshi25White1Bold}}>
          Enjoy Listening To Music
        </Text>
        <Text
          style={{
            ...globalStyle.Satoshi17GreyRegular,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 30,
          }}>
          Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit. Sagittis
          enim{'\n'}purus sed phasellus. Cursus ornare id{'\n'}scelerisque
          aliquam.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#42C83C',
            borderRadius: 20,
            padding: 20,
            width: '100%',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('onboarding-register')}>
          <Text style={{...globalStyle.Satoshi22WhiteBold}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
