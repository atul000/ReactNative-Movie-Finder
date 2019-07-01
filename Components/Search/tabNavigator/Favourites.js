import React, { Component } from 'react';
import { Text, SafeAreaView, ListView } from 'react-native';
import { Container, Content, ListItem } from 'native-base';

const data = [];

export default class Favourites extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      listViewData: data,
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <Content>
            <ListView
              enableEmptySections
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data => (
                <ListItem>
                  <Text>
                    {' '}
                    {data.val().name}
                  </Text>
                </ListItem>
              )}
            />
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
