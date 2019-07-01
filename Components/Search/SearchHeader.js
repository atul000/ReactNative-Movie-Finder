import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { Header, Item, Icon, Input } from 'native-base';


export default class Favourites extends Component {
    render() {
        
    const { onChangeText, beerSearch } = this.props;


        return (
            <Header
                style={{ height: 80 }}
                searchBar
                rounded
            >
            <Item>
                <Icon name="ios-search" />
                <Input
                    placeholder="Enter beer name"
                    onChangeText={ onChangeText }
                    returnKeyType="search"
                    onSubmitEditing={ beerSearch }
                />
            </Item>

            </Header>
        )
    }
}
