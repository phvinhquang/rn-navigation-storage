import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackScreen from '../screens/StackScreens/StackScreen';
import DeeplinkScreen from '../screens/DeeplinkScreen';
import DrawerNavigator from './DrawerNavigator';
import TopTabsNavigator from './TopTabsNavigator';
import StackNavigator from './StackNavigator';

type BottomTabsParamsList = {
  Drawer: undefined;
  TopTab: undefined;
  Stack: undefined;
  Deeplink: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>();

function BottomTabsNavigator(): React.JSX.Element {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Drawer" component={DrawerNavigator} />
      <BottomTabs.Screen name="TopTab" component={TopTabsNavigator} />
      <BottomTabs.Screen name="Stack" component={StackNavigator} />
      <BottomTabs.Screen name="Deeplink" component={DeeplinkScreen} />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigator;
