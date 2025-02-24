import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@/app/Home";
import SettingsScreen from "@/app/Settings";
import DetailsScreen from "@/app/Details";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Platform} from "react-native";
import {Stack as UIStack} from "expo-router";

export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Details: {title: string};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*This project is just a modified version of react-native-navigation*/
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}


function TabNavigator()
{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={StackNavigator} options={{
                title: 'Home',
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                title: 'Settings',
                tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color} />
            }}/>
        </Tab.Navigator>
    );
}

function DrawerNavigator()
{
    return (
        <Drawer.Navigator>
            <Drawer.Screen  name="Home" component={StackNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}


export default function Index(){
    return (
        <>
            <UIStack.Screen options={{headerShown: false}}/>
            {Platform.OS === "ios" ? <TabNavigator /> : <DrawerNavigator />}
        </>
    );
}