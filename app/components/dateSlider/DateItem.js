import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText';

import defaultStyles from '../../config/styles';

const DateItem = ({ date, isActive, handleClick }) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <TouchableOpacity
      onPress={() => handleClick(date)}
      style={[styles.container, isActive ? styles.activeContainer : null]}
    >
      <AppText style={[styles.text, isActive ? styles.activeText : null]}>
        {day + '.' + month}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexBasis: 70,
    flex: 1,
    maxWidth: 70,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  activeContainer: {
    backgroundColor: defaultStyles.colors.secondary,
  },
  text: {
    fontSize: 16,
  },
  activeText: {
    color: defaultStyles.colors.white,
  },
});

export default DateItem;
