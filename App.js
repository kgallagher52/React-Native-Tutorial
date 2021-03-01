import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import FlatListComponent from './src/screens/FlatListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/Components/SquareScreen';
import EnterName from './src/screens/Components/EnterName';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: FlatListComponent,
    Count: CounterScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    ColorComplex: SquareScreen,
    EnterName: EnterName,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
