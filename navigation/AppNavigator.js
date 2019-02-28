import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen}
});

const App = createAppContainer(MainNavigator);

export default App;