import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen1 from '../screens/DrawerScreens/DrawerScreen1';
import DrawerScreen2 from '../screens/DrawerScreens/DrawerScreen2';
import DrawerScreen3 from '../screens/DrawerScreens/DrawerScreen3';

export type DrawerParamsList = {
  Drawer1: undefined;
  Drawer2: undefined;
  Drawer3: {id: number};
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer1" component={DrawerScreen1} />
      <Drawer.Screen name="Drawer2" component={DrawerScreen2} />
      <Drawer.Screen name="Drawer3" component={DrawerScreen3} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
