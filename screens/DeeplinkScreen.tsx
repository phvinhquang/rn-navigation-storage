import {Text, View, Linking, Button} from 'react-native';

function DeeplinkScreen(): React.JSX.Element {
  async function goToSettings() {
    await Linking.openSettings();
  }

  async function goToDantri() {
    await Linking.openURL('https://dantri.com.vn');
  }

  return (
    <View>
      <Text>Deeplink</Text>
      <Button onPress={goToSettings} title="Go to Settings" />
      <Button onPress={goToDantri} title="Go to Dantri" />
    </View>
  );
}

export default DeeplinkScreen;
