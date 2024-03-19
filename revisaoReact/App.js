import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';
import Person from './src/components/Person';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  //simulando lista 
  const peopleList = [
    { id: '1', name: 'Paulo', age: '30' },
    { id: '2', name: 'Carlos', age: '31' },
    { id: '3', name: 'Lucas', age: '32' },
    { id: '4', name: 'Julia', age: '33' },
  ];

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={peopleList}
        renderItem={({ item }) => <Person name={item.name} age={item.age} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

