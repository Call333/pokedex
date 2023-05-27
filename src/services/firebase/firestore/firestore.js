import { Button, Text, View } from "react-native";

import { getFirestore, setDoc, doc } from 'firebase/firestore'

import {app} from './../../firebase/autentication/Auth'

const db = getFirestore(app)

export default function TesteFire(){

    setDoc(doc(db, "pokemons", "IO"), {
        name: "Bulbasaur",
        number: "#001",
        types: ['grass', 'poison']
      });

    return(
        <View>
            <Text>
                OI
            </Text>
            <Button title="Firebase Enviar" onPress={setDoc}></Button>
        </View>
    )
}