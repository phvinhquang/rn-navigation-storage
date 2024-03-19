import {Text, View, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamsList} from '../../navigators/DrawerNavigator';
import {useLayoutEffect} from 'react';

type NavigationProps = DrawerNavigationProp<DrawerParamsList, 'Drawer1'>;

function DrawerScreen1(): React.JSX.Element {
  const navigation = useNavigation<NavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Đây là Drawer số 1',
    });
  }, []);

  // Navigate
  const navigateHandler = function () {
    navigation.navigate('Drawer3', {id: 3});

    // Below still works but TS show error
    // navigation.navigate('Stack');
  };

  const parentHandler = function () {
    console.log(navigation.isFocused());

    navigation.getParent()?.navigate('Stack');
  };

  const getStateHandler = function () {
    console.log(navigation.getState());
  };

  return (
    <View>
      <Text>Drawer Page 1</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button title="Navigate" onPress={navigateHandler} />
        <Button
          title="Go back ?"
          onPress={() => {
            if (navigation.canGoBack()) navigation.goBack();

            Alert.alert('Can not go back', 'Can not go back');
          }}
        />
        <Button title="What my parent can do" onPress={parentHandler} />
        <Button title="Get State" onPress={getStateHandler} />
      </View>
    </View>
  );
}

export default DrawerScreen1;
