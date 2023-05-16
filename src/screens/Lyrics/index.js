import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';
import HeaderLyrics from '../../components/Header/HeaderLyrics';
import {globalStyle} from '../../style/globalStyle';

const Lyrics = ({params}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ImageBackground
        source={require('../../assets/images/pict1.png')}
        style={{height: 560, opacity: 0.8}}>
        <HeaderLyrics title={'Bad Guy'} />
        <View>
          <ScrollView style={{marginHorizontal: 30}}>
            <TouchableOpacity activeOpacity={1}>
              <Text style={{...globalStyle.Satoshi15WhiteBold, lineHeight: 40}}>
                Sleepin', you're on your tippy toes
              </Text>
              <Text
                style={{...globalStyle.Satoshi15GreyMedium, lineHeight: 40}}>
                Creepin' around like no one knows{'\n'}Think you're so criminal
                {'\n'} Bruises on both my knees for you{'\n'} Don't say thank
                you or please{'\n'}I do what I want when I'm wanting to{'\n'} My
                soul? So cynical
              </Text>
              <Text
                style={{...globalStyle.Satoshi15GreyMedium, lineHeight: 40}}>
                Sleepin', you're on your tippy toes{'\n'}Creepin' around like no
                one knows
                {'\n'}Think you're so criminal
                {'\n'} Bruises on both my knees for you{'\n'} Don't say thank
                you or please{'\n'}I do what I want when I'm wanting to{'\n'} My
                soul? So cynical
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>

      <View
        style={{
          // position: 'absolute',
          // bottom: 0,
          // justifyContent: 'flex-end',
          // flexGrow: 1,
          paddingTop: 14,
          paddingBottom: 30,
          marginHorizontal: 30,
          // backgroundColor: 'grey',
        }}>
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
        <View>
          <Image
            source={require('../../assets/images/exp-time.png')}
            style={{width: '100%', height: 16, marginTop: 20}}
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
    </View>
  );
};
export default Lyrics;

const styles = StyleSheet.create({
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
    marginTop: 12,
  },
  pauseButton: {
    backgroundColor: '#42C83C',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
