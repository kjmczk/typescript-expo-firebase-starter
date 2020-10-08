import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import Colors from '../utils/colors';
import SafeView from './SafeView';

const Spinner: React.FC = () => {
  return (
    <SafeView style={styles.container}>
      <ActivityIndicator size="large" color={Colors.secondary} />
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
