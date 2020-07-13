import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile18850Navigator from '../features/UserProfile18850/navigator';
import UserProfile28849Navigator from '../features/UserProfile28849/navigator';
import BlankScreen28841Navigator from '../features/BlankScreen28841/navigator';
import BlankScreen18840Navigator from '../features/BlankScreen18840/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile18850: { screen: UserProfile18850Navigator },
UserProfile28849: { screen: UserProfile28849Navigator },
BlankScreen28841: { screen: BlankScreen28841Navigator },
BlankScreen18840: { screen: BlankScreen18840Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
