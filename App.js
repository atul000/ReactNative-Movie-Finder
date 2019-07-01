import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen';
import SearchTabNavigator from './Components/Search/SearchTabNavigator';
import MoreInfo from './Components/MoreInfo/MoreInfo';


const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    SearchTabNavigator: { screen: SearchTabNavigator },
    MoreInfo: { screen: MoreInfo },
    // SigninScreen: { screen: SigninScreen },
    // SignupScreen: { screen: SignupScreen },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

// export default createAppContainer(createSwitchNavigator(
//   {
//     SigninScreen: { screen: SigninScreen },
//     SignupScreen: { screen: SignupScreen },
//   },
//   {
//     initialRouteName: 'SigninScreen',
//   }
// ));

const nav = createAppContainer(App);
export default nav;
