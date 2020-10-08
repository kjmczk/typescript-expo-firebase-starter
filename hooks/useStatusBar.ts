import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

export default function useStatusBar(
  style: StatusBarStyle,
  animated = true
): void {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style, animated);
    }, [animated, style])
  );
}
