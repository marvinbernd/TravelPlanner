import React from 'react';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField as FormField,
  SubmitButton,
  AppFormDateTimePicker as FormDateTimePicker,
} from '../components/forms';
import Container from '../components/Container';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import { addTrip } from '../services/trips';
import { TouchableOpacity } from 'react-native-gesture-handler';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  start: Yup.date().required().label('Start date'),
  end: Yup.date().required().label('End date'),
});

const TripEditScreen = ({ navigation: { goBack } }) => {
  return (
    <Screen>
      <Container>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => goBack()}>
              <MaterialCommunityIcons name="arrow-left" size={30} />
            </TouchableOpacity>
          </View>
          <AppText weight="bold" style={{ fontSize: 30 }}>
            Add Trip
          </AppText>
        </View>
        <AppForm
          initialValues={{ title: '', start: new Date(), end: new Date() }}
          onSubmit={(values) => addTrip(values.title, values.start, values.end)}
          validationSchema={validationSchema}
        >
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormDateTimePicker name="start" title="Start Date" />
          <FormDateTimePicker name="end" title="End Date" />
          <SubmitButton goBack={goBack} title="Post" />
        </AppForm>
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
});

export default TripEditScreen;
