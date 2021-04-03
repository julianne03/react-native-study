import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Home from './screens/Home';
import TodoListScreen from './screens/TodoListScreen';

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  TodoList: {
    screen: TodoListScreen,
  }
});

export default createAppContainer(DrawerNavigation);