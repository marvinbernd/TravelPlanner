import React from 'react';
import _ from 'lodash';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';
import AppText from '../AppText';
import { StyleSheet } from 'react-native';

import defaultStyles from '../../config/styles';

function SubmitButton({ title, goBack }) {
  const { handleSubmit, errors } = useFormikContext();

  const handlePress = () => {
    handleSubmit();
    if (_.isEmpty(errors)) goBack();
  };

  return (
    <AppButton style={styles.container} onPress={() => handlePress()}>
      <AppText style={styles.title}>{title}</AppText>
    </AppButton>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    color: defaultStyles.colors.white,
  },
});

export default SubmitButton;
