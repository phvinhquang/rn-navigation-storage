import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import type {StackParamsList} from '../../navigators/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useState} from 'react';

type StackProps = StackScreenProps<StackParamsList, 'StackScreen'>;
type StackNavigationProps = StackNavigationProp<StackParamsList, 'StackScreen'>;

function StackScreen({navigation}: StackProps): React.JSX.Element {
  const [text, setText] = useState<string>('');
  const [textSecure, setTextSecure] = useState<string>('');

  const navigation1 = useNavigation<StackNavigationProps>();

  // function toAnotherPage() {
  //   navigation1.navigate('AnotherStackScreen');
  // }

  // Text change handler
  function textChangeHandler(inputText: string) {
    setText(inputText);
  }

  function textSecureChangeHandler(inputText: string) {
    setTextSecure(inputText);
  }

  // Save in storage and navigate
  async function saveInAsyncStorage() {
    try {
      await AsyncStorage.setItem('text', text);

      navigation.navigate('AnotherStackScreen');
    } catch (e) {
      console.log(e);
    }
  }

  async function saveInSecureStorage() {
    try {
      await EncryptedStorage.setItem('securedText', textSecure);

      navigation1.navigate('AnotherStackScreen');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View>
      <Text style={styles.screenTitle}>Stack Screen 1</Text>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>
          Text below will be saved in Async Storage
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type something ..."
          onChangeText={textChangeHandler}
        />
        <Button onPress={saveInAsyncStorage} title="Save in Async Storage" />
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>
          Text below will be saved in Secure Storage
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type something ..."
          onChangeText={textSecureChangeHandler}
        />
        <Button onPress={saveInSecureStorage} title="Save in Secure Storage" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  textInputContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  textInputLabel: {
    fontSize: 18,
    marginBottom: 10,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginHorizontal: 'auto',
    padding: 10,
    fontSize: 18,
  },
});

export default StackScreen;
