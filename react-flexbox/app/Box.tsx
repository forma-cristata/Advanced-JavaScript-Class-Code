import {ReactNode} from "react";
import {Platform, Pressable, StatusBar, StyleSheet, Text, useWindowDimensions, View} from "react-native";

interface BoxProps
{
    children: ReactNode;
    onPress?: () => void; // if null, it will do nothing
}
export default function Box({children, onPress}: BoxProps){
    const { width, height } = useWindowDimensions();
    // Determining if in landscape mode to style appropriately
    const isLandscape = width > height;

    return(
        <Pressable
            onPress={onPress}
            style={({ pressed }) =>
                [styles.box,
                 isLandscape ? styles.landscapeBox : styles.portraitBox,
                pressed && styles.boxPressed
                ]}
            android_ripple={{color: "rgb(229,1,104)"}}>
            <Text style={styles.boxText}>{children}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    box: {
        aspectRatio: 1,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",
        margin: 10,
    },
    portraitBox: {
        width: "25%"
    },
    landscapeBox: {
        height: "25%"
    },
    boxPressed: {
        backgroundColor: "gray"
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold"
    }
})