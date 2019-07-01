import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen';
import SearchTabNavigator from './Components/Search/SearchTabNavigator';
import MoreInfo from './Components/MoreInfo/MoreInfo';

const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    SearchTabNavigator: { screen: SearchTabNavigator },
    MoreInfo: { screen: MoreInfo },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

const nav = createAppContainer(App);
export default nav;
