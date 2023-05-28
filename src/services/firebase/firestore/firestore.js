import { Button, Text, View } from "react-native";

import { getFirestore, setDoc, doc } from 'firebase/firestore'

import { app } from './../../firebase/autentication/Auth'
import { useEffect } from "react";

export const db = getFirestore(app)

export const addPoke = () => {
    setDoc(doc(db, "pokemons", "IO"), {
        name: 'MewTwo',
        number: "150",
        types: ['psychic']
    });
}
export default function TesteFire() {
    return (
        <View>
            <Text>
                OI
            </Text>
            <Button title="Firebase Enviar" onPress={addPoke}></Button>
        </View>
    )
}