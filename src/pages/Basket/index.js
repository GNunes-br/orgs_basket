import { StyleSheet, View, FlatList } from 'react-native';
import { TextComponent } from '../../components';

import { Details, Top, Item } from './components';

export default function BasketPage({ top, details, items }){
    return <>
        <FlatList 
            data={ items.list } 
            renderItem={Item} 
            keyExtractor={ ({ name }) => name }
            ListHeaderComponent={() => {
                return <>
                    <Top { ...top }/>
                    <View style={styles.basket}>
                        <Details { ...details }/>
                        <TextComponent style={styles.title}>{ items.title }</TextComponent>
                    </View>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})