import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'


export const MyItemComponent = props => {
    return(
        <View style={styles.item}>
            <Text style={styles.text}> {props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    item: {
        backgroundColor: '#D3D3D3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})