import React, { useState, useEffect } from 'react';
import { SectionList } from 'react-native';

import { getTrips } from '../services/trips';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Container from '../components/Container';
import Card from '../components/Card';
import ListNavigation from '../components/ListNavigation';

const TripsScreen = () => {
  const [trips, setTrips] = useState([]);
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
    let filteredTrips = getTrips();

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

    setTrips(filteredTrips);
  }, [filter]);

  const handlePress = (label) => {
    let filterArr = [...filter];
    filterArr.map((f) =>
      f.label === label ? (f.active = true) : (f.active = false)
    );
    setFilter(filterArr);
  };

  return (
    <Screen>
      <Container>
        <AppText weight="bold" style={{ fontSize: 30 }}>
          My Trips
        </AppText>
        <ListNavigation handlePress={handlePress} items={filter} />
      </Container>
      <Container>
        <SectionList
          style={{ height: '100%' }}
          sections={trips}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.startString + ' - ' + item.endString}
              image={item.image}
            />
          )}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section: { title } }) => (
            <AppText weight="bold">{title}</AppText>
          )}
        />
      </Container>
    </Screen>
  );
};

export default TripsScreen;
