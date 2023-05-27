import { useState } from 'react'

import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { auth } from '../../services/firebase/autentication/Auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register({ navigation }) {
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [userName, setUserName] = useState('')

    function criarConta() {
        createUserWithEmailAndPassword(auth, email, pass).
            then((userCredential) => {
                const user = userCredential.user
                console.log(user);
                user.displayName = userName
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        navigation.replace('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={require('./../../assets/logo/logo(2).png')}
                    style={{ height: 103, width: 290, }}
                />
            </View>

            <View style={styles.containerInputs}>

                {/* <TextInput
                    style={styles.TextInputs}
                    placeholder='Digite seu usuário'
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                /> */}

                <TextInput
                    style={styles.TextInputs}
                    placeholder='Digite seu email'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />

                <TextInput
                    style={styles.TextInputs}
                    placeholder='Digite sua senha'
                    onChangeText={(text) => setPass(text)}
                    value={pass}
                />
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonLogin} onPress={criarConta}>
                    <Text style={{ color: '#000', fontSize: '1.5em', }}>Criar Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.replace('Login')}>
                    <Text style={{ color: '#000', fontSize: '1.5em', }}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    TextInputs: {
        height: '3.3em',
        width: '22em',
        borderWidth: 0.2,
        borderRadius: '0.7em',
        margin: '0.5em',
        padding: '0.75em'
    },
    buttonLogin: {
        height: '3em',
        width: '10em',
        backgroundColor: '#9DB2BF',
        borderRadius: '0.7em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.3em'
    },
    containerInputs: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerImage: {
        marginTop: '5em',
        marginBottom: '4em'
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});