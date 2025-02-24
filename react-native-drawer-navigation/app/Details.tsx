import {Text, View} from "react-native";
import {RootStackParamList} from "@/app/index";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

interface DetailsScreenProps extends NativeStackScreenProps<RootStackParamList, "Details">{}

export default function DetailsScreen({route} : DetailsScreenProps)
{
    const {title} = route.params;

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}