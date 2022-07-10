import topImage  from '../../assets/top.png'
import farmLogo from '../../assets/logo.png'

import tomatoImage from '../../assets/fruits/tomato.png';
import broccoliImage from '../../assets/fruits/broccoli.png';
import potatoImage from '../../assets/fruits/potato.png';
import cucumberImage from '../../assets/fruits/cucumber.png';
import pumpkinImage from '../../assets/fruits/pumpkin.png';

export const basketMock = {
    top: {
        image: topImage,
        title: 'Detalhe da cesta',
    },
    details: {
        name: 'Cesta de Verduras',
        farmLogo,
        farmName: 'Jenny Jack Farm',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazendo direto para sua cozinha',
        price: 'R$ 40,00',
        buttonTitle: 'Comprar',
    },
    items: {
        title: 'Itens da cesta',
        list: [
            {
                name: 'Tomate',
                image: tomatoImage,
            },
            {
                name: 'Brócolis',
                image: broccoliImage,
            },
            {
                name: 'Batata',
                image: potatoImage,
            },
            {
                name: 'Pepino',
                image: cucumberImage,
            },
            {
                name: 'Abóbora',
                image: pumpkinImage,
            },
        ]
    }
}