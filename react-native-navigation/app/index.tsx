import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@/app/Home";
import SettingsScreen from "@/app/Settings";
import DetailsScreen from "@/app/Details";

export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Details: {title: string};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
