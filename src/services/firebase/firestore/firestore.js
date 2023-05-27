import { Button, Text, View } from "react-native";

import { getFirestore } from 'firebase/firestore'

import {app} from './../../firebase/autentication/Auth'

const db = getFirestore(app)

export default function TesteFire(){

    setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });

    return(
        <View>
            <Text>
                OI
            </Text>
            <Button title="Firebase Enviar"></Button>
        </View>
    )
}