import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import HeaderProfile from '../../components/Header/HeaderProfile';
import {publicPlaylist} from '../../dummyData/publicPlaylist';
import {globalStyle} from '../../style/globalStyle';

const Profile = ({params}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView>
        <View style={styles.boxHeader}>
          <HeaderProfile />
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{width: 90, height: 90}}
            />
            <Text
              style={{...globalStyle.Satoshi12BlackRegular, paddingTop: 10}}>
              soroushnorozyui@gmail.com
            </Text>
            <Text style={{...globalStyle.Satoshi20Black2Bold, paddingTop: 8}}>
              Soroushnrz
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 18}}>
              <View style={{alignItems: 'center', paddingRight: 100}}>
                <Text style={{...globalStyle.Satoshi20Black2Bold}}>778</Text>
                <Text style={{...globalStyle.Satoshi14GreyRegular}}>
                  Followers
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{...globalStyle.Satoshi20Black2Bold}}>243</Text>
                <Text style={{...globalStyle.Satoshi14GreyRegular}}>
                  Following
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.textPublic}>Public Playlist</Text>

        {publicPlaylist.map((item, index) => (
          <TouchableOpacity style={styles.containerPlaylist}>
            <View style={{flexDirection: 'row'}}>
              <Image source={item.music.img} style={styles.imgStyle} />
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.title}>{item.music.title}</Text>
                <Text
                  style={{...globalStyle.Satoshi12BlackRegular, width: 150}}>
                  {item.music.singer}
                </Text>
              </View>
            </View>
            <Text
              style={{...globalStyle.Satoshi15BlackRegular, marginRight: 20}}>
              5:33
            </Text>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faEllipsisH} color={'#A68C8C'} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  boxHeader: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  textPublic: {
    ...globalStyle.Satoshi15BlackBold,
    marginLeft: 30,
    marginBottom: 15,
  },
  title: {
    ...globalStyle.Satoshi16BlackBold,
    width: 150,
    marginBottom: 5,
  },
  containerPlaylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 30,
  },
  imgStyle: {
    width: 56,
    height: 56,
    borderRadius: 15,
    marginRight: 20,
  },
});
