import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResulstShowScreen from './src/Components/ResultsShowScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: ResulstShowScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

const App = createAppContainer(navigator);

export default ()  => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
};
