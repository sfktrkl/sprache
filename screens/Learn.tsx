import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyles } from '../styles/Global';

export default function Learn(): JSX.Element {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Lessons</Text>
    </View>
  );
}
