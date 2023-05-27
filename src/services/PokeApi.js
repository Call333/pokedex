import { useEffect, useState } from "react";

import { Pokemon } from "./Pokemon"

import SearchBar from "../components/SearchBar/SearchBar";

export default function PokeApi(props) {

    const getPokemonsDetail = (pokemon) => {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
    }

    const convertPokeApiDetailToPokemon = (pokeDetail) => {
        let pokemon = new Pokemon();
        pokemon.nome = pokeDetail.name;
        pokemon.id = pokeDetail.id;

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types

        pokemon.tipos = types;
        pokemon.tipo = type;

        pokemon.photoURL = pokeDetail.sprites.other.home.front_default; // pokepokeDetail.sprites.front_default;
        setAgr(pokemon)
        isso.push(pokemon)
    }

    let [agr, setAgr] = useState(new Pokemon()) // dados
    let [pokemons, setPokemons] = useState([]) // url + name
    let [isso, setIsso] = useState([])


    console.log(agr);

    let [limit] = useState(props.limitePoke) // limite de pokemons por pesquisa
    let [offset] = useState(props.offsetPoke); // ponto de início da pesquisa

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    // Fetch pra pegar varios
    useEffect(() => {
        fetch(url, { method: "GET", mode: "cors" })
            .then((response) => response.json())
            .then((respJson) => respJson.results)
            .then((poke) => poke.map((pokem, index) => {
                pokemons.push(pokem)
                getPokemonsDetail(pokem)
            }))
    }, [])

    let urlUnique = 'https://pokeapi.co/api/v2/pokemon/1'

    console.log(pokemons)

    console.log(isso);
    const [search, setSearch] = useState('')
    return (
        <>
            <SearchBar isso={isso}></SearchBar>
            {/* <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Pesquise..."
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
            {
                isso.filter((val) => {
                    if(search === ''){
                        return val
                    }else if(val.nome.toLowerCase().includes(search.toLocaleLowerCase())){
                        return val
                    }
                }).map((poke, index) => (
                    <CardPoke key={index} id={poke.id} nome={poke.nome} type1={poke.tipos[0]} type2={poke.tipos[1]} photo={poke.photoURL}></CardPoke>
                ))
            } */}
        </>
    )
}