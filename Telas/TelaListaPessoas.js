import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { GetPessoas } from "../Api";
import { useState, useEffect, useCallback } from "react";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function TelaListaPessoas() {
    useFocusEffect(useCallback(() => {
        GetPessoas().then(setLista);
    }, []));
    
  const [lista, setLista] = useState([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        renderItem={(props) => <RenderPessoa {...props} />}
      />
      <FAB
        onPress={() => navigation.navigate("Pessoa", { id: null })}
        style={styles.fab}
        icon={(props) => <Icon name="plus" {...props} />}
      />
    </View>
  );
}

function RenderPessoa({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Pessoa", { id: item.id })}
      style={styles.cardPessoa}
    >
      <Icon name="account" size={30} />
      <Text style={styles.nomePessoa}>{item.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
  },
  cardPessoa: {
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 6,
    padding: 8,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 4,
  },
  nomePessoa: { fontSize: 24, marginHorizontal: 4 },
  fab: { position: "absolute", end: 16, bottom: 16 },
});
