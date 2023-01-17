import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyle} from '../../style/globalStyle';

const OnBoardingRegister = ({params}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <StatusBar translucent barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../assets/images/pict-reg.png')}
        style={styles.imgReg}
      />
      <ImageBackground
        source={require('../../assets/images/bg-reg1.png')}
        style={styles.bgTop}
      />
      <ImageBackground
        source={require('../../assets/images/bg-reg2.png')}
        style={styles.bgBottom}
      />
      <View
        style={{
          marginHorizontal: 30,
          justifyContent: 'center',
          flexGrow: 1,
          marginTop: '-50%',
        }}>
        <Image
          source={require('../../assets/images/spotify.png')}
          style={{
            width: 235,
            height: 71,
            marginBottom: 55,
            alignSelf: 'center',
          }}
        />
        <Text style={{...globalStyle.Satoshi26BlackBold, textAlign: 'center'}}>
          Enjoy Listening To Music
        </Text>
        <Text
          style={{
            ...globalStyle.Satoshi17GreyRegular,
            marginTop: 20,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          Spotify is a proprietary Swedish audio streaming and media services
          provider
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('register')}
              style={{
                paddingVertical: 20,
                paddingHorizontal: 30,
                backgroundColor: '#42C83C',
                borderRadius: 20,
              }}>
              <Text style={{...globalStyle.Satoshi19WhiteMedium}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                paddingVertical: 20,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('login')}>
              <Text style={{...globalStyle.Satoshi19BlackMedium}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingRegister;

const styles = StyleSheet.create({
  imgReg: {
    width: 332,
    height: 453,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
  bgTop: {
    width: 170,
    height: 170,
    position: 'absolute',
    right: 0,
    zIndex: -1,
  },
  bgBottom: {
    width: 180,
    height: 300,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
