import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './navigators/BottomTabsNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar />
      <BottomTabsNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
