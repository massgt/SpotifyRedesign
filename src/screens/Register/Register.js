import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import HeaderRegister from '../../components/Header/HeaderRegister';
import {globalStyle} from '../../style/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import ButtonLogin from '../../components/Button/ButtonLogin';
import {useNavigation} from '@react-navigation/native';

const Register = ({params}) => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <HeaderRegister />
      <View style={styles.contentParent}>
        <Text style={{...globalStyle.Satoshi30BlackBold, textAlign: 'center'}}>
          Register
        </Text>
        <View style={styles.supportWrapper}>
          <Text style={{...globalStyle.Satoshi12BlackRegular}}>
            If you need any support{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{...globalStyle.Satoshi12GreenRegular}}>
              click here
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput placeholder="Full Name" style={styles.boxEmail} />
        <TextInput placeholder="Enter Email" style={styles.boxEmail} />
        <TextInput
          placeholder="Password"
          style={styles.boxPass}
          secureTextEntry={hidePassword}
        />
        {hidePassword ? (
          <TouchableOpacity
            style={styles.eyeSlash}
            onPress={() => setHidePassword(hidePassword => !hidePassword)}>
            <FontAwesomeIcon icon={faEye} size={16} color={'#28293D'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.eyeSlash}
            onPress={() => setHidePassword(hidePassword => !hidePassword)}>
            <FontAwesomeIcon icon={faEyeSlash} size={16} color={'#28293D'} />
          </TouchableOpacity>
        )}
        <View style={{marginTop: 35}}>
          <ButtonLogin
            Title={'Create Account'}
            // Action={() => navigation.navigate('BottomTab', {Screen: 'Home'})}
            Action={() => navigation.navigate('login')}
          />
        </View>

        <View style={styles.lineWrapper}>
          <View style={styles.line} />
          <Text style={{...globalStyle.Satoshi12BlackRegular}}>Or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/gmail.png')}
              style={{width: 29, height: 31, marginRight: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/apple.png')}
              style={{width: 29, height: 36}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{...globalStyle.Satoshi14BlackBold}}>
            Do you an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{...globalStyle.Satoshi14BlueBold}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  contentParent: {
    marginHorizontal: 30,
    justifyContent: 'center',
    flexGrow: 1,
  },
  supportWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  boxEmail: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderColor: '#00000020',
    marginBottom: 16,
    ...globalStyle.Satoshi16BlackMedium,
  },
  boxPass: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderColor: '#00000020',
    ...globalStyle.Satoshi16BlackMedium,
  },
  eyeSlash: {
    display: 'flex',
    position: 'relative',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    left: '87%',
    marginTop: -52,
    marginBottom: 13,
  },
  lineWrapper: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    height: 0,
    borderColor: '#D3D3D3',
    width: 146,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});
