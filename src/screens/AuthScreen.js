import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default ({navigation}) => {
  useEffect(() => {
    (async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        return navigation.navigate('Home');
      }

      return navigation.navigate('Login');
    })();
  }, []);

  return (
    <SafeAreaView>
      <Text>Auth Screen</Text>
    </SafeAreaView>
  );
};
