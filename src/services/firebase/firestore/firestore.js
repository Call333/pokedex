import { Button, Text, View } from "react-native";

import { getFirestore, setDoc, doc } from 'firebase/firestore'

import {app} from './../../firebase/autentication/Auth'
import { useEffect } from "react";

const db = getFirestore(app)

export default function TesteFire(){
    
    const addPoke = () => {
        setDoc(doc(db, "pokemons", "IO"), {
            name: "Bulbasaur",
            number: "#056",
            types: ['grass', 'poison']
          });
    }

    return(
        <View>
            <Text>
                OI
            </Text>
            <Button title="Firebase Enviar" onPress={addPoke}></Button>
        </View>
    )
}