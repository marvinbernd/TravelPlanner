import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AppText from './AppText';

import defaultStyles from '../config/styles';

function Card({ title, subtitle, image }) {
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.overlay}>
        <AppText weight="bold" style={styles.title}>
          {title}
        </AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    borderRadius: 25,
    overflow: 'hidden',
    marginVertical: 15,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    color: defaultStyles.colors.white,
  },
  subtitle: {
    color: defaultStyles.colors.white,
    opacity: 0.8,
  },
});

export default Card;
