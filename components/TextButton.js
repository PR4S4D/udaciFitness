import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default ({ children, onPress }) => {
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
