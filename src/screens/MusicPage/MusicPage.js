import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderMusicPage from '../../components/Header/HeaderMusicPage';
import {listHorizontalMusic} from '../../dummyData/listMusic';
import {globalStyle} from '../../style/globalStyle';

const MusicPage = props => {
  console.log(listHorizontalMusic, '<<<<<<<');
  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <ScrollView>
        <HeaderMusicPage />
        <View style={{marginHorizontal: 30}}>
          {/* {listHorizontalMusic(item, index) => ( */}
          <>
            <Image
              source={require('../../assets/images/pict1.png')}
              style={styles.img}
            />
            <View style={styles.titleContainer}>
              <View>
                <Text style={{...globalStyle.Satoshi20BlackBold}}>Bad Guy</Text>
                <Text
                  style={{
                    ...globalStyle.Satoshi20Black2Regular,
                    marginTop: 5,
                  }}>
                  Billie Eilish
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/heart-inactive.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
          </>
          {/* )} */}

          {/* EXAMPLE TIME */}
          <View>
            <Image
              source={require('../../assets/images/exp-time.png')}
              style={{width: '100%', height: 16, marginTop: 40}}
            />
            <View style={styles.expTime}>
              <Text>2:25</Text>
              <Text>4:02</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Repeate.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Previous.png')}
                style={{width: 26, height: 26}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#42C83C',
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Image
                source={require('../../assets/icons/Pause.png')}
                style={{width: 28, height: 28}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Next.png')}
                style={{width: 26, height: 26}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Shuffle.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MusicPage;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 400,
    borderRadius: 30,
    marginTop: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
  },
  expTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});
