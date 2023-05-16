import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../../style/globalStyle';

const HeaderLyrics = ({title, margintop}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        // marginTop: 40,
        marginTop: 53,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: 32,
          height: 32,
          backgroundColor: '#000000',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/icons/back-lyrics.png')}
          style={{width: 6, height: 12}}
        />
      </TouchableOpacity>
      <Text style={{...globalStyle.Satoshi18WhiteBold}}>{title}</Text>
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size={25}
          color={'#7D7D7D'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLyrics;
