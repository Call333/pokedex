
import { render } from '@testing-library/react-native';
import CardGeneration from '../CardGeneration';

describe('CardGeneration', () => {
    test('teste para saber se o componente renderizou', () => {
        render(<CardGeneration></CardGeneration>)
    })
})