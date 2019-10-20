import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default ({navigation}) => {
  const handleLogout = async () => {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: 'grey',
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginTop: 100,
        }}>
        <Text style={{color: '#FFFFFF'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
