import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResulstShowScreen from './src/Components/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: ResulstShowScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);
