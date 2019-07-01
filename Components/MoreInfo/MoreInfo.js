import React, { Component } from 'react';
import { Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { Container, Content, Button, Icon, ListItem } from 'native-base';

import axios from 'axios';

class MoreInfo extends Component {
  state = {
    moreinfo: {},
    image: '',
  };

  componentDidMount() {
    info();
    image();
  }

  render() {
    const id = this.props.navigation.getParam('itemId');
    const imagePath = this.props.navigation.getParam('img');

    const query = `https://api.themoviedb.org/3/movie/${id}?api_key=____YOUR___API____KEY`;
    const query1 = `https://image.tmdb.org/t/p/w500${imagePath}`;

    info = async () => {
      await axios
        .get(query)
        .then(res => {
          // console.log(JSON.stringify(res));
          this.setState({ moreinfo: res.data });

          console.log(this.state.moreinfo);
        })
        .catch(err => console.log(err));
    };

    image = () => {
      axios
        .get(query1)
        .then(res => {
          // console.log(JSON.stringify(res.config.url));
          this.setState({ image: res.config.url });
          console.log(this.state.image);
        })
        .catch(err => console.log(err));
    };

    const { moreinfo } = this.state;

    return (
      <Container>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <ScrollView style={{ flex: 1 }}>
            <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                source={this.state.image ? { uri: this.state.image } : null}
                style={{ height: 540, width: null, flex: 1 }}
              />
            </ListItem>

            <Content>
              <ListItem itemDivider>
                <Text>Tagline</Text>
              </ListItem>
              <ListItem>
                <Text> {moreinfo.tagline}</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>Revenue</Text>
              </ListItem>
              <ListItem>
                <Text>$ {moreinfo.revenue}</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>Release Date</Text>
              </ListItem>
              <ListItem>
                <Text> {moreinfo.release_date}</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>Budget</Text>
              </ListItem>
              <ListItem>
                <Text> $ {moreinfo.budget}</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>Duration</Text>
              </ListItem>
              <ListItem>
                <Text>{moreinfo.runtime} min</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>Production Companies</Text>
              </ListItem>

              {moreinfo.production_companies &&
                moreinfo.production_companies.map(mov => (
                  <ListItem key={mov.id}>
                    <Text> {mov.name}</Text>
                  </ListItem>
                ))}

              <ListItem itemDivider>
                <Text>Genre</Text>
              </ListItem>
              {moreinfo.genres &&
                moreinfo.genres.map(gen => (
                  <ListItem key={gen.id}>
                    <Text> {gen.name}</Text>
                  </ListItem>
                ))}

              <ListItem itemDivider>
                <Text>Production Countries</Text>
              </ListItem>
              {moreinfo.production_countries &&
                moreinfo.production_countries.map(con => (
                  <ListItem key={con.id}>
                    <Text> {con.name}</Text>
                  </ListItem>
                ))}
            </Content>
            <Button iconRight light onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default MoreInfo;
