import React from 'react'

import {SafeAreaView, Text, StyleSheet, View} from 'react-native'

import Top from './src/components/Top'
import Middle from './src/components/Middle'
import Botton from './src/components/Botton'

export default () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.top}>
      <Top/>
    </View>
    <View style={styles.middle}>
      <Middle/>
    </View>
    <View style={styles.botton}>
      <Botton/>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    backgroundColor: 'mediumaquamarine',
    flex: 1,
  },
  middle: {
    backgroundColor: 'white',
    flex: 10,
  },
  botton: {
    backgroundColor: 'black',
    flex: 1,
  }
})

