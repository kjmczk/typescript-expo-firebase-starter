import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { FormikValues } from 'formik';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { passwordReset } from '../components/Firebase/firebase';
import Form from '../components/Forms/Form';
import FormButton from '../components/Forms/FormButton';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import FormField from '../components/Forms/FormField';
import IconButton from '../components/IconButton';
import SafeView from '../components/SafeView';
import useStatusBar from '../hooks/useStatusBar';
import { AuthStackParamList } from '../types';
import Colors from '../utils/colors';

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'ForgotPassword'>;
} & StackScreenProps<AuthStackParamList, 'ForgotPassword'>;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
});

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }: Props) => {
  useStatusBar('light-content');

  const [customError, setCustomError] = useState('');

  async function handlePasswordReset(values: FormikValues) {
    const { email } = values;

    try {
      await passwordReset(email);
      navigation.navigate('Welcome');
    } catch (error) {
      setCustomError(error.message);
    }
  }

  return (
    <SafeView style={styles.container}>
      <Form
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handlePasswordReset(values)}>
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <FormButton title="Forgot Password" />
        {<FormErrorMessage error={customError} visible={true} />}
      </Form>
      <IconButton
        style={styles.backButton}
        iconName="keyboard-backspace"
        color={Colors.white}
        size={30}
        onPress={() => navigation.goBack()}
      />
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.mediumGrey,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ForgotPasswordScreen;
