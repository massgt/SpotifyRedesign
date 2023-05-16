import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const HeaderHome = ({params}) => {
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
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/search.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/spotify.png')}
        style={{
          width: 108,
          height: 33,
          alignItems: 'center',
        }}
      />
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

export default HeaderHome;
