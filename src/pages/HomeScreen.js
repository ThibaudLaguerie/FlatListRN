import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { MyItemComponent } from '../components/MyItemComponent'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this._getProfilesAsync()
    }

    async _getProfilesAsync() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
        let responseJSON = await response.json()
        console.log(await responseJSON)
        this.setState({
            data: await responseJSON
        })
    }

    handleOnPress() {
        this.props.navigation.navigate('Detail')
    }

    render() {
        const { data } = this.state
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>
                <FlatList data={data} renderItem={({ item }) => 
                        <TouchableOpacity onPress={() => navigate('Detail', { profil: item }) }>
                            <MyItemComponent title={item.name} />
                        </TouchableOpacity>
                    } keyExtractor={item => item.id.toString()}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});