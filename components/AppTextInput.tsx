import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Colors from '../utils/colors';

type Props = {
  width?: string;
  leftIcon?: string;
  rightIcon?: string;
  handlePasswordVisibility?: () => void;

  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
};

const AppTextInput: React.FC<Props> = ({
  width = '100%',
  leftIcon,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}: Props) => {
  return (
    <View style={[styles.container, { width }]}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={Colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.mediumGrey}
        {...otherProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={Colors.mediumGrey}
            style={styles.rightIconStyles}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    color: Colors.black,
  },
  rightIconStyles: {
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default AppTextInput;
