import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { FormikValues } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Yup from 'yup';

import { loginWithEmail } from '../components/Firebase/firebase';
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
  navigation: StackNavigationProp<AuthStackParamList, 'Login'>;
} & StackScreenProps<AuthStackParamList, 'Login'>;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a registered email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
});

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  useStatusBar('light-content');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  function handlePasswordVisibility() {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  async function handleOnLogin(values: FormikValues) {
    const { email, password } = values;

    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <SafeView style={styles.container}>
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleOnLogin(values)}>
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <FormField
          name="password"
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          rightIcon={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <FormButton title={'Login'} />
        {<FormErrorMessage error={loginError} visible={true} />}
      </Form>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <IconButton
        style={styles.backButton}
        iconName="keyboard-backspace"
        color="#fff"
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
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
