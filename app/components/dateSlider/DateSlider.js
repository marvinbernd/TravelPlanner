import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DateItem from './DateItem';

const DateSlider = ({
  start,
  end,
  itemsPerInterval = 1,
  handleClick,
  activeDate,
}) => {
  const [dates, setDates] = React.useState([]);
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const getDatesBetweenDates = (startDate, endDate) => {
    console.log('a', endDate);
    let dates = [];
    //to avoid modifying the original date
    const theDate = new Date(startDate);
    const theEndDate = new Date(endDate);
    while (theDate <= theEndDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
  };

  React.useEffect(() => {
    const dates = getDatesBetweenDates(start, end);
    setDates(dates);
  }, []);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = dates.length;
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
        {dates.map((date) => (
          <DateItem
            date={date}
            handleClick={handleClick}
            isActive={activeDate.getDate() === date.getDate() ? true : false}
            key={date}
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
