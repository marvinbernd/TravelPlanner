import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import bgImage from '../assets/images/tulum.jpg';
import AppText from '../components/AppText';

import defaultStyles from '../config/styles';
import DateSlider from '../components/dateSlider/DateSlider';
import { getTrip } from '../services/trips';
import Container from '../components/Container';
import TripItem from '../components/TripItem';
import AppButton from '../components/AppButton';

const TripDetailsScreen = ({ navigation, navigation: { goBack } }) => {
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
    <>
      <ImageBackground source={bgImage} style={styles.background}>
        <View style={styles.overlay}>
          <SafeAreaView style={styles.header}>
            <TouchableOpacity onPress={() => goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={25}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TripEdit')}>
              <MaterialCommunityIcons
                name="pencil"
                size={25}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </SafeAreaView>
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
            keyExtractor={(item) => item.id.toString()}
            style={styles.itemsList}
          />
        )}
      </Container>
      <View style={styles.addButtonContainer}>
        <AppButton
          circle={true}
          size={50}
          onPress={() => navigation.navigate('TripEdit')}
        >
          <MaterialCommunityIcons name="plus" size={40} color="#fff" />
        </AppButton>
      </View>
    </>
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
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
  },
  headerIcon: {
    color: defaultStyles.colors.white,
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
  addButtonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
});

export default TripDetailsScreen;
