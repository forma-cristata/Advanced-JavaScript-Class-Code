import {View, StyleSheet, Platform, StatusBar} from "react-native";
import Box from "@/app/Box";
import {Stack} from "expo-router";

const boxes = 10;

export default function Index() {
    return (
        <>
            <StatusBar hidden={false} />
            <Stack.Screen options={
                {
                    title: "My Custom Title",
                    headerTitleStyle: {
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "darkblue",
                    },
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "lightgrey",
                    }
                }
            }/>

            <View style={styles.container}>
                {/* We do not need to directly tell what "children" is*/}
                {
                    Array.from({length: boxes}).map((_, i) => (
                        <Box
                            onPress={() => alert(`Box #${i} clicked!`)}
                            key={i}>#{i}</Box>
                    ))
                }
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: "ghostwhite",
        ...Platform.select({
            ios: {paddingTop: 20},
            /*android: {paddingTop: StatusBar.currentHeight}*/
        }) /*
            *This will return different styles based on the platform of the mobile device
            *What we write will not render underneath the status bar of the device
            *IOS padding top is always 20px
            *StatusBar.Current height will return the height of the status bar on android
            * Study useWindowDimensions() hook
            */
    }
})