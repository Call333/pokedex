
import { render } from '@testing-library/react-native';
import Home from '../Home';

describe('Home', () => {
    test('teste para saber se o componente renderizou', () => {
        render(<Home></Home>)
    })
})