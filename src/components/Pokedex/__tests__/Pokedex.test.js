
import { render } from '@testing-library/react-native';
import  Pokedex  from '../Pokedex';

describe('Pokedex', () => {
    test('teste para saber se o componente renderizou', () => {
        render(<Pokedex></Pokedex>)
    })
})
