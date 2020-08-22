import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

import defaultStyles from '../config/styles';

function ListNavigation({ items, style, handlePress }) {
  return (
    <View style={[style, styles.navigation]}>
      {items.map((item) => (
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress(item.label)}
        >
          <View style={[styles.itemWrapper, item.active && styles.active]}>
            <AppText
              style={[
                styles.label,
                item.active && { color: defaultStyles.colors.secondary },
              ]}
            >
              {item.label}
            </AppText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    borderBottomColor: defaultStyles.colors.secondaryTransparent,
    borderBottomWidth: 2,
    marginRight: -15,
  },
  navItem: {
    paddingHorizontal: 20,
    marginLeft: -20,
  },
  label: {
    color: defaultStyles.colors.medium,
  },
  itemWrapper: {
    paddingVertical: 8,
  },
  active: {
    borderBottomColor: defaultStyles.colors.secondary,
    borderBottomWidth: 2,
    marginBottom: -2,
  },
});

export default ListNavigation;
