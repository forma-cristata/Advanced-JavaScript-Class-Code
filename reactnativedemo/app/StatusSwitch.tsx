import {useState} from "react";
import {Switch, Text} from "react-native";

export default function StatusSwitch()
{
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <>
        <Switch
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
        />
        <Text>
            {isEnabled ? "Toggled on" : "Toggled off"}
        </Text>
        </>
    )
}