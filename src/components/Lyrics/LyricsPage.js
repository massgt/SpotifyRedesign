import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const {width, height} = Dimensions.get('screen');

const LyricsPage = ({props}) => {
  const [alignment] = useState(new Animated.Value(0));

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // const hiddenTheActionSheet = () => {
  //   Animated.timing(alignment, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  const actionSheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    // outputRange: [-height / 2 + 35, 0],
    // outputRange: [-height / 2.4 + 50, 0],
    outputRange: [-height / 17 + 50, 0],
  });

  const actionSheetStyle = {
    transform: [
      {
        translateY: actionSheetIntropolate,
      },
    ],
  };

  // const actionSheetStyle = {
  //   bottom: actionSheetIntropolate,
  // };

  const gestureHandler = e => {
    if (e.nativeEvent.contentOffset.y > 0) bringUpActionSheet();
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <ScrollView
        onScroll={e => gestureHandler(e)}
        style={styles.grabber}></ScrollView>
      <Text>ISI LYRYCS</Text>
    </Animated.View>
  );
};

export default LyricsPage;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    backgroundColor: 'grey',
  },
  grabber: {
    width: 60,
    borderTopWidth: 2,
    borderTopColor: 'red',
    alignSelf: 'center',
  },
});
