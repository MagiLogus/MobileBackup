import React from 'react';
import { StyleSheet, Text, Image, StatusBar, SafeAreaView, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#043E38', '#B4DCB8']}
        style={styles.background}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <KeyboardAvoidingView
          style={{ flex: 1, width: '100%' }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.backgroundImage}>
              <Image
                style={styles.logo}
                source={require('./src/assets/images/logo.png')}
              />
              <Text style={styles.welcomeText}>Bem Vindo !</Text>
              <Text style={styles.infoText}>Ao fazer login você concorda com nossos <Text style={styles.infoTextNotice}>Termos e Política de Privacidade</Text></Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                />
                <Image
                  source={require('./src/assets/images/mail.png')}
                  style={styles.inputIcon}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  secureTextEntry={true}
                />
                <Image
                  source={require('./src/assets/images/lock.png')}
                  style={styles.inputIcon}
                />
              </View >
              <Text style={styles.pwdText}>Esqueceu a Senha ?</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnLogin}>
                  <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                  <Text style={styles.btnRegisterText}>Registrar</Text>
                </TouchableOpacity>
              </View >
              <Text style={styles.textConect}>Conectar com</Text>
              <Image
                source={require('./src/assets/images/id.png')}
                style={styles.idIcon}
              />
              <Text style={styles.textConectSocial}>ou conectar com</Text>
              <View style={styles.socialLoginContainer}>
                <Image
                  source={require('./src/assets/images/facebook.png')}
                  style={styles.socialIcon}
                />
                <Image
                  source={require('./src/assets/images/google.png')}
                  style={styles.socialIcon}
                />
                <Image
                  source={require('./src/assets/images/linkedin.png')}
                  style={styles.socialIcon}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  backgroundImage: {
    alignItems: 'center',
    width: '90%',
    height: "95%",
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  logo: {
    marginTop: 29,
    width: 130,
    height: 104,
  },
  welcomeText: {
    width: '90%',
    textAlign: 'center',
    marginTop: 34,
    color: '#000',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  infoText: {
    width: '90%',
    marginTop: 16,
    color: '#6B5E5E',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
  },
  infoTextNotice: {
    width: '90%',
    marginTop: 16,
    color: '#043E38',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC9C9',
    backgroundColor: '#F9F9F9',
    borderRadius: 9,
    width: '90%',
    marginTop: 23,
    height: 47,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 17
  },
  pwdText: {
    textAlign: 'right',
    marginTop: 20,
    marginRight: 33,
    width: '90%',
    color: '#043E38'
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 22,
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
  },
  btnLogin: {
    backgroundColor: '#043E38',
    width: 151,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#043E38'
  },
  btnLoginText: {
    color: '#fff',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  btnRegister: {
    backgroundColor: '#FFF',
    width: 151,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#043E38'
  },
  btnRegisterText: {
    color: '#043E38',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  textConect: {
    marginTop: 21,
    color: '#6B5E5E',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  idIcon: {
    marginTop: 17,
    width: 69,
    height: 72,
  },
  textConectSocial: {
    marginTop: 11,
    color: '#6B5E5E',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  socialLoginContainer: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 18,
    width: '90%',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 39,
    height: 39,
  },
});
