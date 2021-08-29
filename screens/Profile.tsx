import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyles } from '../styles/Global';

export default function Profile(): JSX.Element {
  return (
    <View style={GlobalStyles.container}>
      <Text>Profile</Text>
    </View>
  );
}
