import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PokeApi from "../../services/PokeApi";
import { Pokemon } from "../../services/Pokemon";

import { auth } from "../../services/firebase/autentication/Auth";
import { db } from './../../services/firebase/firestore/firestore'
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

function CardPoke(props) {
    
    const [user, setUser] = useState(auth.currentUser)
    const [uid] = useState(user.getIdToken())

    const [types, setTypes] = useState([props.types])

    const [type, setType] = useState(props.type)

    useEffect(
        () => {
            setType(props.type)
            setTypes(props.types)
        }, [types, type]
    )

    const addPoke = () => {
        console.log(uid);
        if (props.id != undefined && types.length > 1) {
            setDoc(doc(db, user.uid, props.nome), {
                name: props.nome,
                number: props.id,
                types: [types[0], types[1]],
                photoURL: props.photo,
                timestamp: serverTimestamp()
            });
        } else {
            setDoc(doc(db, user.uid, props.nome), {
                name: props.nome,
                number: props.id,
                types: [types[0]],
                photoURL: props.photo,
                timestamp: serverTimestamp()
            });
        }
    }

    const A = () => {
        if (types.length > 1 && types != undefined) {
            return (
                <View style={styles.types} key={props.nome}>
                    <Text style={styles.type} >{types[0]}</Text>
                    <Text style={styles.type}>{types[1]}</Text>
                </View>

            )
        } else {
            return (
                <View style={styles.types}>
                    <Text style={styles.type}>{types}</Text>
                </View>
            )
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.Touchable} onPress={addPoke}>
                <View style={styles.card} key={props.id}>
                    <View style={styles.card__top}>
                        <View style={styles.card_top_number}>
                            <Text style={styles.cardNumber}>#{props.id}</Text>
                        </View>
                        <View style={styles.card_top_name}>
                            <Text style={{ fontWeight: '600', textTransform: 'capitalize' }}>{props.nome}</Text>
                        </View>
                    </View>
                    <View style={styles.card_bottom}>
                        <A></A>
                        <Image
                            source={{ uri: props.photo }}
                            style={{ height: 90, width: 90 }}
                        />
                    </View>
                    {/* <PokeApi></PokeApi> */}
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
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

export default CardPoke;