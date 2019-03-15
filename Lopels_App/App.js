import HomeScreen from './screens/Home';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
},
{
  initialRouteName:'Home',
  headerMode: 'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;