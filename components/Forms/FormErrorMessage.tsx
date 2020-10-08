import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../utils/colors';

type Props = {
  error?:
    | string
    | string[]
    | FormikErrors<FormikValues>
    | FormikErrors<FormikValues>[];
  visible?:
    | boolean
    | FormikTouched<FormikValues>
    | FormikTouched<FormikValues>[];
};

const FormErrorMessage: React.FC<Props> = ({ error, visible }: Props) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: Colors.red,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
});

export default FormErrorMessage;
