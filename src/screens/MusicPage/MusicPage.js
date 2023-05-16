import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BottomSheet from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import HeaderMusicPage from '../../components/Header/HeaderMusicPage';
import LyricsPage from '../../components/Lyrics/LyricsPage';
import {listHorizontalMusic} from '../../dummyData/listMusic';
import {globalStyle} from '../../style/globalStyle';
import Lyrics from '../Lyrics';

const MusicPage = props => {
  const navigation = useNavigation();
  // reff
  const bottomSheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['1% ', '98%'], []);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handle sheet changes', index);
  });
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

          <View style={styles.wrapperButton}>
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
            <TouchableOpacity style={styles.pauseButton}>
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
      {/* <LyricsPage /> */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 26,
        }}
        onPress={() => RBSheetLyrics.open()}>
        <FontAwesomeIcon icon={faChevronUp} />
        <Text>Lyrics</Text>
      </TouchableOpacity>
      {/* <BottomSheet
        handleIndicatorStyle={{display: 'none'}}
        backgroundComponent={null}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <Lyrics />
      </BottomSheet> */}
      <RBSheet
        closeOnDragDown={true}
        ref={ref => {
          RBSheetLyrics = ref;
        }}
        height={1000}
        openDuration={400}
        customStyles={{
          draggableIcon: {backgroundColor: '#FFFFFF'},
          container: {
            // backgroundColor: '#FFFFFF',
            paddingTop: 10,
            // borderTopLeftRadius: 30,
            // borderTopRightRadius: 30,
            // paddingHorizontal: 36,
            // paddingBottom: 27,
          },
        }}>
        <Lyrics />
      </RBSheet>
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
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  pauseButton: {
    backgroundColor: '#42C83C',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
