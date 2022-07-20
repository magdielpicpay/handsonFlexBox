import React from 'react'

import {Text, StyleSheet, View} from 'react-native'

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Transações</Text>
    <Text style={styles.text}>Histórico</Text>
  </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})