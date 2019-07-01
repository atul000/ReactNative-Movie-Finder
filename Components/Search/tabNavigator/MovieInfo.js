import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card, CardItem, Text, Body, Button,
} from 'native-base';

export default class MovieInfo extends Component {
  render() {
    const { movie, nav } = this.props;
    return (
      <View>
        {movie
          && movie.map(mov => (
            <Card key={mov.id}>
              <CardItem header bordered>
                <Text>
                  Title:
                  {mov.title}
                </Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.overview}>Overview:</Text>
                  <Text style={styles.description}>
                    {mov.overview}
                    {'\n'}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                      {' '}
                      Release Date
                    </Text>
                    :
                    {' '}
                    {mov.release_date}
                    {'\n'}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                      Original Lang
                    </Text>
                    :
                    {' '}
                    {mov.original_language}
                    {'\n'}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                      {' '}
                      Rating:
                    </Text>
                    {' '}
                    {mov.vote_average}
                    {'\n'}
                  </Text>

                  <Text>
                    <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}> ID</Text>
                    :
                    {' '}
                    {mov.id}
                    {'\n'}
                  </Text>

                  <Button
                    rounded
                    info
                    small
                    style={styles.loginButtonSection}
                    onPress={nav}
                    // onPress={() => this.props.navigation.navigate('Favourites')}
                  >
                    <Text>More Info</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  overview: {
    flex: 1,
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    textAlign: 'left',
  },
  loginButtonSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
