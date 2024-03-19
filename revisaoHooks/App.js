import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <StatusBar style="auto" />
      <View style={styles.count}>
        <Button title="Incrementar" onPress={increment} />
        <Button title="Decrementar" onPress={decrement} />
      </View>
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
  count: {
    flexDirection: 'row',
    gap: 25,
    margin: 25,
  },
  text: {
    fontSize: 24,
  },
});
