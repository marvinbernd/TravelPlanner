import React from 'react';
import { SafeAreaView, View } from 'react-native';

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
