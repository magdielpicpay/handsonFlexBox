import React from 'react'

import {Text, StyleSheet, View} from 'react-native'

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Início</Text>
    <Text style={styles.text}>Extrato</Text>
    <Text style={styles.text}>Cobrar</Text>
    <Text style={styles.text}>Notificações</Text>
    <Text style={styles.text}>Ajustes</Text>
  </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})