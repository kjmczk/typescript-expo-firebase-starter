import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { logout } from '../components/Firebase/firebase';
import useStatusBar from '../hooks/useStatusBar';

const HomeScreen: React.FC = () => {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
