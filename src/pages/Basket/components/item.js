import { View, Image, StyleSheet } from "react-native";
import { TextComponent } from "../../../components";

export function Item({ item: { name, image } }) {
    return <View style={styles.item}>
        <Image source={image} style={styles.image}/>
        <TextComponent style={styles.name}>{name}</TextComponent>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
})