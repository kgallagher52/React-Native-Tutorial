import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import FlatListComponent from './src/screens/FlatListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/Components/SquareScreen';
import TextInputScreen from './src/screens/Components/TextInputScreen';
import BoxScreen from './src/screens/Components/WorkingWithLayouts/BoxScreen';
import FlexScreen from './src/screens/Components/WorkingWithLayouts/FlexScreen';
import PositionScreen from './src/screens/Components/WorkingWithLayouts/PositionScreen';
import AllLayouts from './src/screens/Components/WorkingWithLayouts/AllLayouts';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: FlatListComponent,
    Count: CounterScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    ColorComplex: SquareScreen,
    TextInputScreen: TextInputScreen,
    BoxScreen: BoxScreen,
    FlexScreen: FlexScreen,
    PositionScreen: PositionScreen,
    AllLayouts: AllLayouts,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
