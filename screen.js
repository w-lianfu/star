import React from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

import Home from './ios/src/container/home'
import Start from './ios/src/container/start'
import Found from './ios/src/container/found'
import My from './ios/src/container/my'

export function registerScreen() {
  Navigation.registerComponent('star.Home', () => Home),
  Navigation.registerComponent('star.Start', () => Start),
  Navigation.registerComponent('star.Found', () => Found),
  Navigation.registerComponent('star.My', () => My)
}
