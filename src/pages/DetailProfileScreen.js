import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DetailProfileScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('profil','No-ID').name
        };
      }

    constructor(props) {
        super(props)
        this.state = {
            profil: this.props.navigation.getParam('profil', 'NO-ID')
        }
    }


    render() {
        const { profil } = this.state

        return(
            <View style={styles.container}>
                <Text style={styles.text}>Username : {profil.username}</Text>
                <Text style={styles.text}>Address : {profil.address.suite}, {profil.address.street}</Text>
                <Text style={styles.text}>{profil.address.city} </Text>
                <Text style={styles.text}>Phone : {profil.phone}</Text>
                <Text style={styles.text}>Website : {profil.website}</Text>
                <Text style={styles.text}>Company : {profil.company.name}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        marginVertical: 5
    }
})