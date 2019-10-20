import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';

import HomeScreen from './screens/HomeScreen';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthScreen,
      App: AppStack,
      Login: LoginScreen,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
