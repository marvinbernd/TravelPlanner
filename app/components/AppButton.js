import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import defaultStyles from '../config/styles';

function AppButton({ children, size = 40, circle, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        colors={[
          defaultStyles.colors.primaryLight,
          defaultStyles.colors.primaryDark,
        ]}
        start={[0, 1]}
        end={[1, 0]}
        style={[
          styles.linearGradient,
          circle && styles.circle,
          circle && { borderRadius: size / 2 },
          circle && { width: size, height: size },
        ]}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    padding: 0,
  },
});

export default AppButton;
