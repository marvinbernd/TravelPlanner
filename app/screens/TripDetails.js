import React from 'react';
import Screen from '../components/Screen';
import { ImageBackground, View, StyleSheet } from 'react-native';
import bgImage from '../assets/images/tulum.jpg';
import AppText from '../components/AppText';

import defaultStyles from '../config/styles';

const TripDetails = (props) => (
  <View>
    <ImageBackground source={bgImage} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <AppText weight="bold" style={styles.title}>
            Mexico
          </AppText>
          <AppText style={styles.subtitle}>Dec 26 - Jan 06</AppText>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    color: defaultStyles.colors.white,
  },
  subtitle: {
    color: defaultStyles.colors.white,
    opacity: 0.8,
  },
});

export default TripDetails;
