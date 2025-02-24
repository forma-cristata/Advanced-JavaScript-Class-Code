import {useState} from "react";
import {StyleSheet, Switch, Text, View} from "react-native";

export default function SettingsScreen()
{
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.settingRow}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>

            <View style={styles.settingRow}>
                <Text style={styles.settingText}>Notifications</Text>
                <Switch value={notifications} onValueChange={setNotifications} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    settingText: {
        fontSize: 18
    }
});