import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

import defaultStyles from '../config/styles';

const TripItem = ({ item }) => {
  const itemDate = new Date(item.date);
  const hours = itemDate.getUTCHours();
  const minutes = itemDate.getMinutes() === 0 ? '00' : itemDate.getMinutes();
  const time = hours + ':' + minutes;

  let title = '';

  switch (item.type) {
    case 'airplane':
      title = item.arrivalAirport + ' - ' + item.depatureAirport;
      break;
    default:
      title = item.title;
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <AppText style={styles.timeLabel}>{time}</AppText>
      </View>
      <View>
        <Icon
          name={item.type}
          size={30}
          backgroundColor={defaultStyles.colors.light}
        />
        <View style={styles.timeLine}></View>
      </View>
      <View style={styles.content}>
        <AppText weight="bold">{title}</AppText>
        <AppText style={styles.subtitle}>Flight Nr.: 1223</AppText>
        <AppText style={styles.subtitle}>Arrival Time: 12:45 (EST)</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  time: {
    width: 60,
    paddingTop: 5,
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 14,
  },
  timeLine: {
    position: 'absolute',
    top: 0,
    left: '42%',
    width: 4,
    height: '100%',
    backgroundColor: defaultStyles.colors.medium,
    zIndex: -1,
  },
  content: {
    paddingLeft: 12,
    paddingTop: 2,
    paddingBottom: 15,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default TripItem;
