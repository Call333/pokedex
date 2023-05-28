import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useEffect, useState } from 'react';

import { auth, app } from '../../services/firebase/autentication/Auth'
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';

function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [user, setUser] = useState(auth.currentUser)

    function logarConta() {
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigation.replace('Generations')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Usuário não existe');
                navigation.replace('Cadastro de Usuário')
            });
    }


    useEffect(
        () => {
            onAuthStateChanged(getAuth(app), (user) => {
                if (user) {
                    console.log("User logged in...");
                    setUser(user);
                } else {
                    console.log("User not logged in...");
                    setUser(null);
                }
            });

            if (user) {
                navigation.replace('Generations')
            } else {
                navigation.navigate('Login')
            }
        }, [user]
    )

    function criarConta() {
        navigation.replace('Cadastro de Usuário')
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

                <TouchableOpacity style={styles.buttonLogin} onPress={logarConta}>
                    <Text style={{ color: '#000', fontSize: '1.5em', }}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogin} onPress={criarConta}>
                    <Text style={{ color: '#000', fontSize: '1.5em', }}>Criar Conta</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login

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
        margin: '.2em'
    },
    containerInputs: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerImage: {
        marginTop: '5em',
        marginBottom: '4em'
    }
});