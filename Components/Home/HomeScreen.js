import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Button } from 'native-base';

const backgroundImage = require('../../assets/HomeScreen/movie1.jpg');

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.HomeScreenView}>
        <View style={styles.Home}>
          <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
        </View>

        <Button block={true} onPress={() => this.props.navigation.navigate('SearchTabNavigator')}>
          <Text style={{ color: 'white' }}>Search Beer</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeScreenView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Home: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
});
