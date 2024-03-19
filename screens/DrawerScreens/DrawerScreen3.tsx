import {Button, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamsList} from '../../navigators/DrawerNavigator';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

type NavigationProp = DrawerNavigationProp<DrawerParamsList, 'Drawer3'>;
type ScreenRouteProp = RouteProp<DrawerParamsList, 'Drawer3'>;

function DrawerScreen3(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ScreenRouteProp>();

  const changeIdHandler = function () {
    navigation.setParams({id: 300});
  };

  const getStateHandler = function () {
    console.log(navigation.getState());
  };

  return (
    <View>
      <Text>Drawer Page 3</Text>
      <Text>ID is {route.params.id} </Text>
      <Button title="Change ID" onPress={changeIdHandler} />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Button title="Get State" onPress={getStateHandler} />
    </View>
  );
}

export default DrawerScreen3;
