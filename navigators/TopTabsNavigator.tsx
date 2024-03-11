import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTabScreen from '../screens/TopTabsScreens/TopTabScreen';
import TopTabScreen2 from '../screens/TopTabsScreens/TopTabScreen2';

type TopTabsParamsList = {
  TopTab1: undefined;
  TopTab2: undefined;
};

const TopTabs = createMaterialTopTabNavigator<TopTabsParamsList>();

function TopTabsNavigator(): React.JSX.Element {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="TopTab1" component={TopTabScreen} />
      <TopTabs.Screen name="TopTab2" component={TopTabScreen2} />
    </TopTabs.Navigator>
  );
}

export default TopTabsNavigator;
