import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResulstShowScreen from './src/Components/ResultsShowScreen';
import { StateProvider } from './src/context/BlogContext';
import CreateResource from './src/screens/CreateResource';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: ResulstShowScreen,
  Create: CreateResource,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

const App = createAppContainer(navigator);

export default ()  => {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  )
};
