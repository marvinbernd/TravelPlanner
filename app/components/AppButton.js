import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import defaultStyles from '../config/styles';

function AppButton({ children }) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[
          defaultStyles.colors.primaryLight,
          defaultStyles.colors.primaryDark,
        ]}
        style={styles.linearGradient}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppButton;
