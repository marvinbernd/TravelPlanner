import React, { useState, useEffect } from 'react';
import { SectionList, View, StyleSheet, ImageBackground } from 'react-native';

import { getTrips } from '../services/trips';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Container from '../components/Container';
import Card from '../components/Card';
import ListNavigation from '../components/ListNavigation';
import AppButton from '../components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bgImage from '../assets/images/world-map.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TripsScreen = ({ navigation }) => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [filter, setFilter] = useState([
    {
      label: 'Upcoming',
      active: true,
    },
    {
      label: 'Past',
    },
    {
      label: 'Drafts',
    },
  ]);

  useEffect(() => {
    const tripsArr = getTrips();
    setTrips(tripsArr);
  }, []);

  useEffect(() => {
    let filteredTrips = trips;

    filter.forEach((f) => {
      if (f.label === 'Upcoming' && f.active) {
        filteredTrips = filteredTrips.filter((section) => {
          let sections = [...section.data];
          sections = sections.filter((trip) => {
            return !trip.draft && trip.end > new Date();
          });
          if (sections.length !== 0) return true;
        });
      }

      if (f.label === 'Past' && f.active) {
        filteredTrips = filteredTrips.filter((section) => {
          let sections = [...section.data];
          sections = sections.filter((trip) => {
            return !trip.draft && trip.end < new Date();
          });
          if (sections.length !== 0) return true;
        });
      }

      if (f.label === 'Drafts' && f.active) {
        filteredTrips = filteredTrips.filter((section) => {
          let sections = [...section.data];
          sections = sections.filter((trip) => {
            return trip.draft;
          });
          if (sections.length !== 0) return true;
        });
      }
    });

    setFilteredTrips(filteredTrips);
  }, [trips, filter]);

  const handlePress = (label) => {
    let filterArr = [...filter];
    filterArr.map((f) =>
      f.label === label ? (f.active = true) : (f.active = false)
    );
    setFilter(filterArr);
  };

  return (
    <ImageBackground source={bgImage} style={styles.background}>
      <Screen>
        <Container>
          <View style={styles.header}>
            <AppText weight="bold" style={{ fontSize: 30 }}>
              My Trips
            </AppText>
            <AppButton>
              <MaterialCommunityIcons name="plus" size={30} color="#fff" />
            </AppButton>
          </View>
          <ListNavigation handlePress={handlePress} items={filter} />
          <SectionList
            style={styles.list}
            sections={filteredTrips}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Card
                  title={item.title}
                  subtitle={item.startString + ' - ' + item.endString}
                  image={item.image}
                />
              </TouchableOpacity>
            )}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { year, month } }) => (
              <AppText weight="bold">
                {month} {year}
              </AppText>
            )}
          />
        </Container>
      </Screen>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  list: {
    height: '100%',
    paddingTop: 20,
  },
});

export default TripsScreen;
