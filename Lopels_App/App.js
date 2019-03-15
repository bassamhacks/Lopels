import HomeScreen from './screens/HomeScreen/Home';
import LoginScreen from './screens/LoginScreen/Login';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen}
},
{
  initialRouteName:'Login',
  headerMode: 'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;