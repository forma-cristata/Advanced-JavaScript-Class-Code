import {Text, Button, View, StyleSheet} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {useLayoutEffect} from "react";


interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, "Home">{}

export default function HomeScreen({navigation} : HomeScreenProps)
{
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    }, [navigation]);
    const onPressSettings = () => navigation.navigate("Settings");
    const onPressDetails = (title: string) => navigation.navigate("Details", {title: title});

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.message}>Welcome to the App!</Text>
            <Button title="Settings" onPress={onPressSettings} />
            <Button title="First Item" onPress={() => onPressDetails("First Item")} />
            <Button title="Second Item" onPress={() => onPressDetails("Second Item")} />
            <Button title="Third Item" onPress={() => onPressDetails("Third Item")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        marginBottom: 20
    }
});