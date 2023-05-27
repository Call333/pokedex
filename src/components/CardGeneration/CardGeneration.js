import { useContext, useState } from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MyContext from "../contexts/myContext";
import Pokedex from "../Pokedex/Pokedex";
import PokeApi from "../../services/PokeApi";



export default function CardGeneration(props) {

    const [navegacao, setNavi] = useState(props.navigation)

    const [limite, setLimite] = useState(props.limitPoke)
    const [offset, setOffSet] = useState(props.offsetPoke)

    function att() {
        navegacao.navigate('Pokedex', {
            limit: limite,
            offset: offset
        })
    }

    return (
        <>
            <TouchableOpacity onPress={att} key={props.keyId}>
                <View style={styles.container}>

                    <Text style={styles.title}>{props.generation}</Text>
                    <Image
                        style={styles.formatImage}
                        source={{ uri: props.urlPhoto }}
                    ></Image>

                </View>
            </TouchableOpacity>
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: '15em',
        width: '22em',

        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        flexWrap: 'wrap',

        margin: 5,
        borderRadius: '2em',
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    title: {
        fontWeight: '600'
    },
    formatImage:{ // 352 x 192
        height: 192, width: 352
    }
})