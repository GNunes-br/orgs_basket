import { Dimensions, Image, StyleSheet } from 'react-native';
import { TextComponent } from '../../../components'

const width = Dimensions.get('screen').width;
const imageWidth = 768;
const imageHeight = 578;

export function Top({ image, title }) {
    return <>
        <Image source={image} style={styles.topImage} />
        <TextComponent style={styles.title}>{title}</TextComponent>
    </>
}


const styles = StyleSheet.create({
    topImage: {
        width: '100%',
        height: imageHeight / imageWidth * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 16,
    }
})