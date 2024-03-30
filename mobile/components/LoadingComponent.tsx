import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingComponent = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size={50} color='black' />
  </View>
);

export default LoadingComponent;
