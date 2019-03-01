import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import InterestScreen from '../screens/InterestScreen';
import FeedScreen from '../screens/FeedScreen';
import EnterpriseRegisterScreen from '../screens/EnterpriseRegisterScreen';
import PersonsScreen from '../screens/PersonsScreen';
import HomeSuggestionsScreen from '../screens/HomeSuggestionsScreen';
import VacancyScreen from '../screens/VacancyScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen},
  Knowledge: {screen: KnowledgeScreen},
  Interest: {screen: InterestScreen},
  Feed: {screen: FeedScreen},
  EnterpriseRegister: {screen: EnterpriseRegisterScreen},
  Persons: {screen: PersonsScreen},
  HomeSuggestions: {screen: HomeSuggestionsScreen},
  Vacancy: {screen: VacancyScreen},
});

const App = createAppContainer(MainNavigator);

export default App;