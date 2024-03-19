import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {
  const [history, setHistory] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [biometricExist, setBiometricExist] = useState(false);

  async function CheckExistAuthenticates() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setBiometricExist(compatible)

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    console.log(LocalAuthentication.AuthenticationType[types[0]]);
  }

  async function handleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync();
    if (!biometric) {
      return Alert.alert(
        "Falha ao Logar! "
      )
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com Biometria !'
    })

    setAuthenticated(auth.success)

    if (auth.success) {
      setHistory()
    }
  }

  async function SetHistory() {
    const objAuth = {
      dateAuthenticate: moment().format("DD/MM/YYYY HH:mm:ss")
    }

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth))

    setHistory(objAuth)
  }

  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem('authenticate')
    if (objAuth) {
      setHistory(JSON.parse(objAuth))
    }
  }

  useEffect(() => {
    CheckExistAuthenticates()
    GetHistory()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textAuth}>{biometricExist ? 'Seu dispositivo é compativel !' : 'Não é compativel !'}</Text>
      <TouchableOpacity style={styles.button} onPress={handleAuthentication}>
        <Text style={styles.text}>Autenticar Acesso !</Text>
      </TouchableOpacity>
      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {authenticated ? 'Autenticado' : 'Não autenticado'}
      </Text>
      {history.dateAuthenticate ? <Text>Ultimo acesso em {history.dateAuthenticate}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#6BB9ED',
    width: '90%',
    padding: 16,
    borderRadius: 15,
    margin: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: 'center',
    lineHeight: 30,
  },
  textAuth: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textReturn: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 50
  },
});
