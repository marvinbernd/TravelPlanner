import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import defaultStyles from '../config/styles';
import AppText from './AppText';

function ListNavigation({ items, handlePress }) {
  return (
    <View style={styles.navigation}>
      {items.map((item) => (
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress(item.label)}
        >
          <AppText
            style={[
              styles.label,
              item.active && { color: defaultStyles.colors.secondary },
            ]}
          >
            {item.label}
          </AppText>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: -20,
  },
  label: {
    color: defaultStyles.colors.medium,
  },
});

export default ListNavigation;
