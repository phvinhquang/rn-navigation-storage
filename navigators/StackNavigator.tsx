import {createStackNavigator} from '@react-navigation/stack';
import StackScreen from '../screens/StackScreens/StackScreen';
import AnotherStackScreen from '../screens/StackScreens/AnotherStackScreen';

export type StackParamsList = {
  StackScreen: undefined;
  AnotherStackScreen: undefined;
};

const Stack = createStackNavigator<StackParamsList>();

function StackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackScreen" component={StackScreen} />
      <Stack.Screen name="AnotherStackScreen" component={AnotherStackScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
