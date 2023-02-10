import { View, Text } from 'react-native'
import React from 'react'
import AnimatedScreen from './animatedScreen'

const AnimatedScreen2 = () => {
  return (
    <View>
      <Text>animatedScreen2</Text>
      <AnimatedScreen text="Los Angeles Laykers" progress="45%" />
      <AnimatedScreen text="Golden State Warriors" progress="55%" />
      <AnimatedScreen text="New York Knicks" progress="20%" />
      <AnimatedScreen text="sky And Thunder" progress="0.5%" />
    </View>
  );
}

export default AnimatedScreen2