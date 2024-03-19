import { View, Text, StyleSheet } from "react-native";

const Person = ({ name, age }) => {

    return (
        <View style={style.container}>
            <Text style={style.text}>Nome: {name}</Text>
            <Text style={style.text}>Idade: {age}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        color: 'blue',
        fontFamily: 'SingleDay_400Regular',
        fontSize: 16,
    },
})

export default Person;