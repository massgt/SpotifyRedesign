import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HeaderLyrics from '../../components/Header/HeaderLyrics';
import {listAlbums} from '../../dummyData/listAlbums';
import {globalStyle} from '../../style/globalStyle';
import {listSongs, playlistMusic} from '../../dummyData/listMusic';

const ArtistPage = ({params}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <ScrollView>
        <StatusBar barStyle={'light-content'} translucent={'transparent'} />
        <HeaderLyrics />
        <Image
          source={require('../../assets/images/pict-detail-singer.png')}
          style={styles.imgBanner}
        />
        <View style={{alignItems: 'center', marginTop: 185}}>
          <Text style={{...globalStyle.Satoshi20BlackBold}}>Billie Eilish</Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{...globalStyle.Satoshi13BlackRegular}}>2 Album</Text>
            <Text style={{...globalStyle.Satoshi13BlackRegular}}>,</Text>
            <Text style={{...globalStyle.Satoshi13BlackRegular}}>67 Track</Text>
          </View>
          <Text
            style={{...globalStyle.Satoshi12GreyRegular, textAlign: 'center'}}>
            Lorem ipsum dolor sit amet, consectetur{'\n'} adipiscing elit.
            Turpis adipiscing vestibulum orci{'\n'} enim, nascetur vitae
          </Text>
        </View>
        <Text style={styles.textAlbums}>Albums</Text>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: 30}}>
            {listAlbums.map((item, index) => (
              <TouchableOpacity>
                <Image source={item.music.img} style={styles.img} />
                <Text style={styles.textTitle}>{item.music.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.songslist}>
          <Text style={{...globalStyle.Satoshi16BlackBold}}>Songs</Text>
          <TouchableOpacity>
            <Text style={{...globalStyle.Satoshi12BlackRegular}}>See More</Text>
          </TouchableOpacity>
        </View>

        {listSongs.map((item, index) => (
          <TouchableOpacity style={styles.containerPlaylist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.btnPlay2}>
                <Image
                  source={require('../../assets/icons/Play.png')}
                  style={{width: 17, height: 17}}
                />
              </TouchableOpacity>
              <View>
                <Text
                  style={{...globalStyle.Satoshi16BlackBold, maxWidth: 170}}>
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
      </ScrollView>
    </View>
  );
};

export default ArtistPage;

const styles = StyleSheet.create({
  imgBanner: {
    width: '100%',
    height: 240,
    zIndex: -1,
    position: 'absolute',
  },
  img: {
    width: 140,
    height: 135,
    borderRadius: 30,
    marginRight: 15,
  },
  textTitle: {
    ...globalStyle.Satoshi13BlackBold,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: -15,
  },
  textAlbums: {
    ...globalStyle.Satoshi16BlackBold,
    marginHorizontal: 30,
    marginVertical: 15,
  },
  songslist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 30,
  },
  containerPlaylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginHorizontal: 30,
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
});
