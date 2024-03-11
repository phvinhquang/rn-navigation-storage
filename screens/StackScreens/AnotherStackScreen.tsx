import {Button, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {StackParamsList} from '../../navigators/StackNavigator';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

type AnotherScreenProps = StackScreenProps<
  StackParamsList,
  'AnotherStackScreen'
>;

function AnotherStackScreen({
  navigation,
}: AnotherScreenProps): React.JSX.Element {
  // const navigation = useNavigation();
  const [text, setText] = useState<string>('Nothing saved yet !');
  const [textSecured, setTextSecured] = useState<string>('Nothing saved yet !');

  // Get data from Storage
  useEffect(() => {
    async function getTextFromAsyncStorage() {
      const value = await AsyncStorage.getItem('text');
      if (value) setText(value);
    }

    async function getTextFromSecureStorage() {
      const value = await EncryptedStorage.getItem('securedText');
      if (value) setTextSecured(value);
    }

    getTextFromAsyncStorage();
    getTextFromSecureStorage();
  }, []);

  function goBack() {
    navigation.goBack();
  }

  return (
    <View>
      <Text>Stack Screen 2</Text>
      <View style={styles.textContainer}>
        <Text style={styles.title}>From Async Storage</Text>
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>From Secure Storage</Text>
        <Text style={styles.text}>{textSecured}</Text>
      </View>
      <Button onPress={goBack} title="Go Back" />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
  },
});

export default AnotherStackScreen;
