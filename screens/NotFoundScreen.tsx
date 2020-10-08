import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AppStackParamList } from '../types';

type Props = {
  navigation: StackNavigationProp<AppStackParamList, 'NotFound'>;
} & StackScreenProps<AppStackParamList, 'NotFound'>;

const NotFoundScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen does not exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Home')}
        style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default NotFoundScreen;
