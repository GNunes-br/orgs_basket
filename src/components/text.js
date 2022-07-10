import { StyleSheet, Text } from "react-native";

export function TextComponent({ children, style }) {
    let defautStyle = styles.text;

    if(style?.fontWeight === 'bold'){
        defautStyle = styles.boldText;
    }

    return <Text style={[style, defautStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    boldText: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    }
})