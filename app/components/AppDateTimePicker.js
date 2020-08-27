import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import getFullDate from '../utils/getFullDate';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import Icon from './Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AppDateTimePicker = ({
  title,
  selectedValue,
  onSelectValue,
  mode = 'date',
}) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    onSelectValue(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  let value = '';

  switch (mode) {
    case 'time':
      value = selectedValue.getHours() + ':' + selectedValue.getMinutes();
      break;
    default:
      value = getFullDate(selectedValue);
      break;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={showMode}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{title}</AppText>
          </View>
          <View style={styles.valueContainer}>
            <AppText>{value}</AppText>
          </View>
          {show && (
            <TouchableOpacity onPress={() => setShow(false)}>
              <MaterialCommunityIcons
                name="close"
                size={20}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          value={selectedValue}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    color: defaultStyles.colors.medium,
  },
  titleContainer: {
    width: 100,
    marginRight: 10,
  },
  valueContainer: {
    flexGrow: 1,
  },
  closeIcon: {
    color: defaultStyles.colors.medium,
  },
});

export default AppDateTimePicker;
