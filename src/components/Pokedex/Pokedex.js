import { ActivityIndicator, StyleSheet, View } from 'react-native';

import React, { useState } from 'react';

import PokeApi from '../../services/PokeApi';

function Pokedex({route}) {  
  
  let [ limite ] = useState(route.params.limit)
  let [ offset ] = useState(route.params.offset)
  // console.log(limite);
  // console.log(offset);
  return (
    <View style={styles.container}>
      <PokeApi limitePoke={limite} offsetPoke={offset}></PokeApi>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
});

export default Pokedex;