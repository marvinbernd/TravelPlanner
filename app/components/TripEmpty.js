import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

function TripEmpty(props) {
  return (
    <View style={styles.container}>
      <AppText>No Items added</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TripEmpty;
