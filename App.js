import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import AppNavigation from './src/components/AppNavigation/AppNavigation';
import Login from './src/components/LoginScreen/Login'; 


import { auth } from './src/services/firebase/autentication/Auth';
import { onAuthStateChanged } from 'firebase/auth';
import Register from './src/components/RegisterScreen/Register';


export default function App() {
  
  return(
    <AppNavigation></AppNavigation>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});
