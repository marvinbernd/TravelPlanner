import React from 'react';
import { useFormikContext } from 'formik';

import AppDateTimePicker from '../AppDateTimePicker';

const AppFormDateTimePicker = ({ title, name }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppDateTimePicker
        title={title}
        selectedValue={values[name]}
        onSelectValue={(value) => setFieldValue(name, value)}
      />
    </>
  );
};

export default AppFormDateTimePicker;
