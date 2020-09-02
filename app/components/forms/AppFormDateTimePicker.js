import React from 'react';
import { useFormikContext } from 'formik';

import AppDateTimePicker from '../AppDateTimePicker';

const AppFormDateTimePicker = ({
  title,
  name,
  minimumDateField,
  maximumDateField,
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const minimumDate = values[minimumDateField]
    ? new Date(values[minimumDateField])
    : new Date();

  const value = values[name] ? values[name] : minimumDate;

  return (
    <>
      <AppDateTimePicker
        title={title}
        selectedValue={value}
        onSelectValue={(value) => setFieldValue(name, value)}
        minimumDate={minimumDate}
      />
    </>
  );
};

export default AppFormDateTimePicker;
