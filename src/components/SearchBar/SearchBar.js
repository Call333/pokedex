import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import CardPoke from "../CardPoke/CardPoke";
// import { EvilIcons } from "@expo/vector-icons";

function SearchBar(props) {
  const [search, setSearch] = useState('')
  let [itens, setI] = useState(props.isso)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          {/* <EvilIcons name="search" size={30} color="black" /> */}
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquise..."
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      {
        props.isso.filter((val) => {
          if (search === '') {
            return val
          } else if (
            (val.nome.toLowerCase().includes(search.toLocaleLowerCase())) ||
            (val.id.toString().toLowerCase().includes(search.toLocaleLowerCase()))
          ) {
            return val
          }
        }).map((poke, index) => {
          if (poke.tipos.length > 1) {// pokemons que possuem 2 tipos
            return (
              <CardPoke key={poke.id} id={poke.id} nome={poke.nome} types={poke.tipos} photo={poke.photoURL}></CardPoke>
            )
          } else { // pokemons que possuem apenas 1 tipo
            return (
              <CardPoke key={poke.id} id={poke.id} nome={poke.nome} types={poke.tipos} photo={poke.photoURL}></CardPoke>
            )
          }
        } // fim da function
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container1: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBar: {
    margin: ".5em",
    borderRadius: 15,
    padding: "1em",
    width: "100%",
    height: 10,
    fontSize: 15,
    borderWidth: 0.2,
    fontFamily: "verdana",
  },
  searchIcon: {
    position: 'absolute',
    right: '1em'
  },
});

export default SearchBar;
