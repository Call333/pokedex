
import { render } from '@testing-library/react-native';
import  SearchBar  from '../SearchBar';

describe('SearchBar', () => {
    test('teste para saber se o componente renderizou', () => {
        render(<SearchBar></SearchBar>)
    })
})