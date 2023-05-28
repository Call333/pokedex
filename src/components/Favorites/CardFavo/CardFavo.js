import { useState, useEffect } from "react"

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function CardFavo(props) {
    const [types, setTypes] = useState([props.tipos])

    useEffect(
        () => {
            setTypes(props.tipos)
        }, [types]
    )

    const A = () => {
        if (types.length > 1 && types != undefined) {
            return (
                <View style={styles.types} key={props.nome}>
                    <Text style={styles.type}>{types[0]}</Text>
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
            <TouchableOpacity style={styles.Touchable}>
                <View style={styles.card} key={props.id}>
                    <View style={styles.card__top}>
                        <View style={styles.card_top_number}>
                            <Text style={styles.cardNumber}>#{props.id}</Text>
                        </View>
                        <View style={styles.card_top_name}>
                            <Text style={{ fontWeight: '600', textTransform: 'capitalize' }}>{props.name}</Text>
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