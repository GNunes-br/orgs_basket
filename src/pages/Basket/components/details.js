import { Image, StyleSheet, View } from 'react-native';
import { TextComponent, ButtonComponent } from '../../../components'

export function Details({ name, farmLogo, farmName, description, price, buttonTitle }){
    return <>
        <TextComponent style={styles.name}>{name}</TextComponent>
        <View style={styles.farm}>
            <Image source={farmLogo} style={styles.farmLogo}/>
            <TextComponent style={styles.farmName}>{farmName}</TextComponent>
        </View>
        <TextComponent style={styles.description}>{description}</TextComponent>
        <TextComponent style={styles.price}>{price}</TextComponent>
        <ButtonComponent>{buttonTitle}</ButtonComponent>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    farmLogo: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})