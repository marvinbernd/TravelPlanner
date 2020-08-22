import React from 'react';
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { Text } from 'react-native';
import { AppLoading } from 'expo';

import defaultStyles from '../config/styles';

const AppText = ({ children, style, weight = 'normal', ...otherProps }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text
      style={[
        defaultStyles.text,
        style,
        {
          fontFamily:
            weight === 'bold'
              ? 'Montserrat_800ExtraBold'
              : 'Montserrat_600SemiBold',
        },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
