import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import HeaderHome from '../../components/Header/HeaderHome';
import {dataCategory} from '../../dummyData/category';
import {listHorizontalMusic, playlistMusic} from '../../dummyData/listMusic';
import {globalStyle} from '../../style/globalStyle';
// import ScreenBrightness from 'react-native-screen-brightness';
// import DeviceBrightness from '@adrianso/react-native-device-brightness';

// DeviceBrightness.setBrightnessLevel(0.2);

const Home = () => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState('Music');

  // onChangeNavToBlue = i => {
  //   this.setState({navblue: i});
  //   if (i === 'New Order') {
  //     return this.onGetNewOrder();
  //   } else if (i === 'Preparing') {
  //     return this.onGetPreparingOrder();
  //   } else if (i === 'On Delivery') {
  //     return this.onGetDeliveryOrder();
  //   } else if (i === 'Completed') {
  //     return this.onGetCompletedOrder();
  //   } else if (i === 'Cancelled') {
  //     return this.onGetCancelledOrder();
  //   } else {
  //     this.onGetAllOrder();
  //   }
  // };

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <ScrollView>
        <HeaderHome />
        <View style={{marginHorizontal: 30}}>
          <View
            style={{
              backgroundColor: '#42C83C',
              borderRadius: 30,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginTop: 38,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{...globalStyle.Satoshi12White2Medium}}>
                New Album
              </Text>
              <Text
                style={{...globalStyle.Satoshi19White2Bold, marginVertical: 5}}>
                Happier Than{'\n'}Ever
              </Text>
              <Text style={{...globalStyle.Satoshi14White2Medium}}>
                Billie Eilish
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/images/banner-home.png')}
                style={{
                  width: 280,
                  height: 200,
                  position: 'absolute',
                  left: -120,
                  top: -95,
                }}
              />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 40}}>
            {dataCategory.map((i, index) => (
              <View style={{alignItems: 'center', marginRight: 25}}>
                {i === isSelected ? (
                  <TouchableOpacity>
                    <Text style={{...globalStyle.Satoshi20BlackMedium}}>
                      {i}
                    </Text>
                    <View style={styles.lineCategory} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <Text style={{...globalStyle.Satoshi20BlackMedium}}>
                      {i}
                    </Text>
                    {/* <View style={styles.lineCategory} /> */}
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 30, marginBottom: 35}}>
            {listHorizontalMusic.map((item, index) => (
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={listHorizontalMusic =>
                  navigation.navigate('music-page')
                }>
                <Image
                  source={item.music.img}
                  style={{width: 147, height: 187, borderRadius: 30}}
                />
                <TouchableOpacity style={styles.btnPlay}>
                  <Image
                    source={require('../../assets/icons/Play.png')}
                    style={{width: 15, height: 15}}
                  />
                </TouchableOpacity>
                <Text style={styles.textTitle}>{item.music.title}</Text>
                <Text style={{...globalStyle.Satoshi14BlackRegular}}>
                  {item.music.singer}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.playlist}>
            <Text style={{...globalStyle.Satoshi20BlackBold}}>Playlist</Text>
            <TouchableOpacity>
              <Text style={{...globalStyle.Satoshi12BlackRegular}}>
                See More
              </Text>
            </TouchableOpacity>
          </View>
          {playlistMusic.map((item, index) => (
            <TouchableOpacity
              style={styles.containerPlaylist}
              onPress={() => navigation.navigate('profile')}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.btnPlay2}>
                  <Image
                    source={require('../../assets/icons/Play.png')}
                    style={{width: 17, height: 17}}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={{...globalStyle.Satoshi16BlackBold}}>
                    {item.listMusic.title}
                  </Text>
                  <Text style={{...globalStyle.Satoshi15BlackRegular}}>
                    {item.listMusic.singer}
                  </Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{...globalStyle.sa15}}>{item.listMusic.time}</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/icons/heart-grey.png')}
                    style={{width: 21, height: 20, marginLeft: 50}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  lineCategory: {
    height: 3,
    width: 30,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#42C83C',
  },
  btnPlay: {
    width: 30,
    height: 30,
    backgroundColor: '#E6E6E6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: -15,
    marginRight: 11,
  },
  btnPlay2: {
    width: 37,
    height: 37,
    backgroundColor: '#E6E6E6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  textTitle: {
    ...globalStyle.Satoshi16BlackBold,
    marginBottom: 3,
    maxWidth: 150,
  },
  playlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  containerPlaylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
});
