import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

type Props = {
  iconName: string;
  color: string;
  size: number;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
};

const IconButton: React.FC<Props> = ({
  iconName,
  color,
  size,
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
