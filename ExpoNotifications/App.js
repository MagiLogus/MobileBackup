import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.requestPermissionsAsync();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export default function App() {

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      alert("Sem Permissão");
      return;
    }

    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World!",
        body: "Bem vindo ao mundo!"
      },
      trigger: {
        seconds: 5
      }
    });


  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.text}>Notificação !</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    backgroundColor: '#11A3D9',
    width: "80%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: "bold",
  },
});
