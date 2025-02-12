import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import StatusSwitch from "@/app/StatusSwitch";

export default function Index() {
    /*Two stateful variables*/
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Hello, world!</Text>
            <TextInput
                onChangeText={(fname) => setFirstName(fname)}
                value={firstName}
                placeholder="First name"
                style={styles.input}
            />
            <TextInput
                onChangeText={(lname) => setLastName(lname)}
                value={lastName}
                placeholder="Last name"
                style={styles.input}
            />
            <Button
                title="Click here!"
                onPress={() => Alert.alert(`Hi ${firstName} ${lastName}`)}
            />
            <StatusSwitch />

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        padding: 12,
        margin: 12,
        borderRadius: 5,
        borderColor: 'grey',

    }
});
/*
alt shift L reformats your code to fix the tabbing
*/
