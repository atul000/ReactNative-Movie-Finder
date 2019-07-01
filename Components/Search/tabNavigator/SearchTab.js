import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';

import axios from 'axios';
import SearchHeader from '../SearchHeader';

export default class SeatchTab extends Component {
  state = {
    searchBeer: '',
    beerData: {},
    movie: [],
  };

  beerSearch = () => {
    Keyboard.dismiss();
    const beerName = this.state.searchBeer.toLowerCase();

    // const api_key = '484cba9c7bd2cef1f756516ce6b2d251';
    const api_key = '9f17a3d56c41d3a62c659d5427333d4f';
    const query = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${beerName}`;

    axios
      .get(query)
      .then(res => {
        // console.log(JSON.stringify(res));
        this.setState({ movie: res.data.results });
        console.log(this.state.movie);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { movie } = this.state;
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch}
        />
        <Content>
          {movie &&
            movie.map(mov => (
              <Card key={mov.id}>
                <CardItem header bordered>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}> Title:</Text> {mov.title}
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
                      : {mov.release_date}
                      {'\n'}
                    </Text>

                    <Text>
                      <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        Original Lang
                      </Text>
                      : {mov.original_language}
                      {'\n'}
                    </Text>

                    <Text>
                      <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        {' '}
                        Rating:
                      </Text>{' '}
                      {mov.vote_average}
                      {'\n'}
                    </Text>

                    <Button
                      rounded
                      info
                      small
                      style={styles.loginButtonSection}
                      //   onPress={nav}
                      onPress={() =>
                        this.props.navigation.navigate('MoreInfo', {
                          itemId: mov.id,
                          img: mov.poster_path,
                        })
                      }
                    >
                      <Text>
                        More Info
                        {'\n'}
                      </Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    // fontFamily: 'pixel-font',
  },
  description: {
    textAlign: 'left',
  },
  loginButtonSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
