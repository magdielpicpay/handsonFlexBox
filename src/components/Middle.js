import React, {useState, useEffect} from 'react'

import {Text, StyleSheet, View, FlatList} from 'react-native'

import axios from 'axios'

export default () => {
    const [listTransactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions().then(data => setTransactions(data.last_sales))
    })

    getTransactions = async () => {
        try {
            result = await axios('http://localhost:8080/api/v1/home', {
                method: 'get',
                headers: {
                    'Content-type': 'Application/json',
                    'Accept': 'Application/json',
                },
            })
            return result.data
        } catch (err) {
            console.warn(err)
        }
    }

    const transactionRender = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.consumer}>{item.consumer}</Text>
            <Text style={styles.amount}>R${item.amount}</Text>
        </View>
    )

    return (
        <View>
            <FlatList
                data={listTransactions}
                renderItem={transactionRender}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row'
    },
    type: {
        flex: 2
    },
    consumer: {
        flex: 4
    },
    amount: {
        flex: 1
    }
})