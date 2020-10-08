import Constants from 'expo-constants';
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
};

const SafeView: React.FC<Props> = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.safeAreaContainer, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
});

export default SafeView;
