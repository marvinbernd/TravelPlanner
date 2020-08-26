import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DateItem from './DateItem';

const DateSlider = ({
  items,
  itemsPerInterval = 1,
  handleClick,
  activeDate,
}) => {
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  activeDate = new Date(activeDate);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${70 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
      >
        {items.map((item, index) => (
          <DateItem
            date={item}
            handleClick={handleClick}
            isActive={activeDate.getDate() === item.getDate() ? true : false}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
});

export default DateSlider;
