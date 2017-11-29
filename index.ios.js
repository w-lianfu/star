import React from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { registerScreen } from './screen'


registerScreen()

Navigation.startTabBasedApp({
  tabs: [
    {
      label: '首页',
      screen: 'star.Home',
      title: '首页'
    },
    {
      label: '开氪',
      screen: 'star.Start',
      title: '开氪'
    },
    {
      label: '发现',
      screen: 'star.Found',
      title: '发现'
    },
    {
      label: '我的',
      screen: 'star.My',
      title: 'My Page'
    }
  ]
})
