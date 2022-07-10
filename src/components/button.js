import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextComponent } from './text'

export function ButtonComponent({ children }){
    return <>
        <TouchableOpacity style={styles.button}>
            <TextComponent style={styles.buttonText}>{ children }</TextComponent>
        </TouchableOpacity>
    </>
}


const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})