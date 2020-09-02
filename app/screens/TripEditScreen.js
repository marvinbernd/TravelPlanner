import React, { useState } from 'react';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import tripsApi from '../api/trips';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  start: Yup.date().required().label('Start date'),
  end: Yup.date().required().label('End date'),
});

const TripEditScreen = ({ navigation, navigation: { goBack } }) => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState();

  const handleSubmit = async (trip, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);

    console.log(trip);

    const result = await tripsApi.addTrip(trip, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the trip.');
    }

    resetForm();
    navigation.navigate('Details', result.data);
  };

  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
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
          initialValues={{ title: '', start: new Date(), end: null }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormDateTimePicker name="start" title="Start Date" />
          <FormDateTimePicker
            name="end"
            title="End Date"
            minimumDateField="start"
          />
          <SubmitButton title="Post" />
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
