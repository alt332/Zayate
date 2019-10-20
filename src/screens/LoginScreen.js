import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {firebase} from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: 120,
  },
  logoText: {
    fontSize: 68,
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  facebookLoginContainer: {
    alignSelf: 'center',
    marginTop: 100,
  },
  facebookLoginText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  dollarIconContainer: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 50,
  },
  facebookIconContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    padding: 12,
    marginTop: 50,
  },
});

export default ({navigation}) => {
  const handleLogin = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (!result.isCancelled && result.grantedPermissions.length == 2) {
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        Alert.alert('Error', 'Error in Facebook login!');
      }

      const credential = firebase.auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      const userData = await firebase.auth().signInWithCredential(credential);

      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      return navigation.navigate('Home');
    }
  };

  return (
    <LinearGradient
      colors={['#49CFAE', '#3BAFDAE6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ZAYATE</Text>
        </View>

        <View style={styles.facebookLoginContainer}>
          <Text style={styles.facebookLoginText}>Login with facebook</Text>

          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.dollarIconContainer}>
              <Image source={require('../../assets/images/dollar.png')} />
            </View>
            <View style={styles.facebookIconContainer}>
              <Image
                source={require('../../assets/images/facebook-brands.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
