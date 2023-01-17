import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const HeaderRegister = ({params}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 40,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: 32,
          height: 32,
          backgroundColor: '#0000000A',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/icons/back.png')}
          style={{width: 6, height: 12}}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/spotify.png')}
        style={{
          width: 108,
          height: 33,
          alignItems: 'center',
          marginLeft: 86,
        }}
      />
    </View>
  );
};

export default HeaderRegister;
