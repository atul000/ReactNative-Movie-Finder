import React from 'react';
import { Text } from 'react-native';

import {
  Footer, FooterTab, Button, Icon,
} from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SearchTab from './tabNavigator/SearchTab';
import Favourites from './tabNavigator/Favourites';

const TabNavigator = createBottomTabNavigator(
  {
    SearchTab,
    Favourites,
  },
  {
    tabBarComponent: props => (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigation.state.index === 0}
            onPress={() => props.navigation.navigate('SearchTab')}
          >
            <Icon name="search" />
            <Text>Search</Text>
          </Button>
        </FooterTab>
      </Footer>
    ),
  },
);

export default createAppContainer(TabNavigator);
