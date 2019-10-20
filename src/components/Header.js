import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default ({title = ''}) => (
  <LinearGradient
    colors={['#49CFAE', '#3BAFDAE6']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.container}>
    <Text style={styles.titleText}>{title}</Text>
  </LinearGradient>
);
