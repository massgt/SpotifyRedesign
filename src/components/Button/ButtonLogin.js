import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {globalStyle} from '../../style/globalStyle';

const ButtonLogin = ({Title, Action}) => {
  return (
    <TouchableOpacity
      onPress={Action}
      style={{
        padding: 27,
        backgroundColor: '#42C83C',
        borderRadius: 30,
        alignItems: 'center',
      }}>
      <Text style={{...globalStyle.Satoshi20WhiteBold}}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogin;
