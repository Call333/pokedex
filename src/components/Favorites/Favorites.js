import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import SearchBar from '../SearchBar/SearchBar'
import PokeApi from '../../services/PokeApi';
import CardPoke from '../CardPoke/CardPoke';
import { Button } from 'react-native';

import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase/firestore/firestore';
import { auth } from '../../services/firebase/autentication/Auth';

import { useEffect, useState } from 'react';
import { Pokemon } from '../../services/Pokemon';
function Favorites(props) {

    const [user, setUser] = useState(auth.currentUser)

    const querySnapshot = getDocs(collection(db, user.uid));

    const docRef = doc(db, user.uid, 'pidgeotto')

    const [data, setData] = useState([])

    const [pokemons, setPokemons] = useState([])

    const [types] = useState('cavalo')

    useEffect(
        () => {
            if (name == undefined) {
                const docSnap = getDoc(docRef)
                    .then((datas) => {
                        console.log(datas);
                        setName(datas._document.data.value.mapValue.fields.name.stringValue)
                        setTypes(datas._document.data.value.mapValue.fields.types.arrayValue.values)
                        setPhoto(datas._document.data.value.mapValue.fields.photoURL.stringValue)
                        setNumber(datas._document.data.value.mapValue.fields.number.integerValue)
                    })
            }
        }, []
    )   

    const pegaOsPokemons = (pokeNoFire) => {
        let pokemon = new Pokemon();

        console.log(pokeNoFire);
        pokemon.id = pokeNoFire.number.integerValue;
        pokemon.nome = pokeNoFire.name.stringValue;

        const types = pokeNoFire.types.arrayValue.values.map((typeSlot) => typeSlot.stringValue);
        console.log(types);

        pokemon.tipos = types
        console.log(pokemon.tipos);

        pokemon.photoURL = pokeNoFire.photoURL.stringValue
        console.log(pokemon);
        pokemons.push(pokemon)
    }

    useEffect(
        () => {
            querySnapshot
                .then((datas) => {
                    datas.docs.map(
                        (dado) => {
                            // data.push(dado._document.data.value.mapValue.fields)
                            pegaOsPokemons(dado._document.data.value.mapValue.fields)
                            console.log(dado._document.data.value.mapValue.fields);
                        }
                    )
                })
        }, []
    )

    const A = () => {
        if (types.length > 1 && types != undefined) {
            return (
                <View style={styles.types} key={props.nome}>
                    <Text style={styles.type} ></Text>
                    <Text style={styles.type}></Text>
                </View>
            )
        } else {
            return (
                <View style={styles.types}>
                    <Text style={styles.type}></Text>
                </View>
            )
        }
    }

    console.log(pokemons);

    return (
        <>
            <TouchableOpacity style={styles.Touchable}>
                <View style={styles.card} key={props.id}>
                    <View style={styles.card__top}>
                        <View style={styles.card_top_number}>
                            <Text style={styles.cardNumber}>#</Text>
                        </View>
                        <View style={styles.card_top_name}>
                            <Text style={{ fontWeight: '600', textTransform: 'capitalize' }}></Text>
                        </View>
                    </View>
                    <View style={styles.card_bottom}>
                        <A></A>
                        <Image
                            source={{ uri: props.photoURL }}
                            style={{ height: 90, width: 90 }}
                        />
                    </View>
                    {/* <PokeApi></PokeApi> */}
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    Touchable: {
        height: '9em',
        width: '10em',
        margin: '2%',
        borderRadius: 12,
    },
    card: {
        backgroundColor: '#d3d3d3',
        height: '9em',
        width: '10em',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        fontFamily: 'Segoi UI',
        margin: '2%',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        justifyContent: 'center'
    },
    cardNumber: {
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 50,
        width: '3em',
        textAlign: 'center',
        right: 0,
        position: 'absolute',
    },
    card__top: {
        display: 'flex',
        flexDirection: 'column'
    },
    card_top_number: {
        textAlign: 'right',
    },
    card_top_name: {

    },
    card_bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    types: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize',
        height: 40,
    },
    type: {
        height: 15,
        width: 50,
        padding: '1em',
        borderRadius: 10,
        backgroundColor: '#F9EBEA',
        marginBottom: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    },
})