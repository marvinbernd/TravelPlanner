import React, { useState, useEffect } from 'react';
import Screen from '../components/Screen';
import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import bgImage from '../assets/images/tulum.jpg';
import AppText from '../components/AppText';

import defaultStyles from '../config/styles';
import DateSlider from '../components/dateSlider/DateSlider';
import { getTrip } from '../services/trips';
import Container from '../components/Container';
import TripItem from '../components/TripItem';

const TripDetails = (props) => {
  const [trip, setTrip] = useState(null);
  const [activeDate, setActiveDate] = useState(null);
  const [tripItems, setTripItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrip(1);
      setTrip(data);
      setActiveDate(data.dates[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!trip) return;

    const active = new Date(activeDate);
    const items = trip.items.filter(
      (item) => item.date.getDate() === active.getDate()
    );

    setTripItems(items);
  }, [activeDate]);

  const handleClick = (date) => {
    setActiveDate(date);
  };

  return (
    <View>
      <ImageBackground source={bgImage} style={styles.background}>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <AppText weight="bold" style={styles.title}>
              Mexico
            </AppText>
            <AppText style={styles.subtitle}>Dec 26 - Jan 06</AppText>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.sliderContainer}>
        {trip && (
          <DateSlider
            items={trip.dates}
            itemsPerInterval={5}
            activeDate={activeDate}
            handleClick={handleClick}
          />
        )}
      </View>
      <Container>
        {tripItems && (
          <FlatList
            data={tripItems}
            renderItem={({ item }) => <TripItem item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.itemsList}
          />
        )}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    color: defaultStyles.colors.white,
  },
  subtitle: {
    color: defaultStyles.colors.white,
    opacity: 0.8,
  },
  itemsList: {
    height: '100%',
  },
});

export default TripDetails;
