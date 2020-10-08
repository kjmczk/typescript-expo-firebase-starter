import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
import useStatusBar from '../hooks/useStatusBar';
import { AuthStackParamList } from '../types';
import Colors from '../utils/colors';

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'Welcome'>;
} & StackScreenProps<AuthStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }: Props) => {
  useStatusBar('light-content');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/flame.png')} style={styles.logo} />
        <Text style={styles.subtitle}>Expo Firebase Starter</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.mediumGrey,
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 20,
    color: Colors.primary,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%',
  },
});

export default WelcomeScreen;
