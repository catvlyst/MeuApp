import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const favoritosIniciais = [
  {
    id: "1",
    nome: "Camisa do Vasco",
    categoria: "Camisas",
    preco: "R$ 249,90",
    imagem: require("../../assets/images/produtos/camisavasco.png"),
  },
  {
    id: "2",
    nome: "Camisa Fitness",
    categoria: "Camisas",
    preco: "R$ 249,90",
    imagem: require("../../assets/images/produtos/camisa1.png"),
  },
  {
    id: "3",
    nome: "Tênis Esportivo",
    categoria: "Calçados",
    preco: "R$ 199,90",
    imagem: require("../../assets/images/produtos/tenis1.png"),
  },
  {
    id: "4",
    nome: "Calça Legging",
    categoria: "Calças",
    preco: "R$ 119,90",
    imagem: require("../../assets/images/produtos/calcalegging.png"),
  },
];

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState(favoritosIniciais);

  const removerFavorito = (id: string) => {
    setFavoritos((listaAtual) =>
      listaAtual.filter((item) => item.id !== id)
    );
  };

  return (
    <View style={styles.container}>

      {/* Título da página */}
      <Text style={styles.titulo}>Favoritos</Text>

      {/* Verifica se existem favoritos */}
      {favoritos.length === 0 ? (

        /* Caso não tenha nenhum favorito */
        <View style={styles.vazio}>
          <Ionicons
            name="heart-outline"
            size={70}
            color="#D71920"
          />

          <Text style={styles.textoVazio}>
            Você ainda não possui favoritos
          </Text>

          <Text style={styles.subTexto}>
            Adicione produtos aos favoritos para encontrá-los
            facilmente aqui.
          </Text>
        </View>

      ) : (

        /* Caso tenha favoritos */
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}

          renderItem={({ item }) => (
            <View style={styles.card}>

              {/* Imagem do produto */}
              <Image
                source={item.imagem}
                style={styles.imagem}
              />

              {/* Informações do produto */}
              <View style={styles.informacoes}>

                <Text style={styles.nome}>
                  {item.nome}
                </Text>

                <Text style={styles.categoria}>
                  {item.categoria}
                </Text>

                <Text style={styles.preco}>
                  {item.preco}
                </Text>

              </View>

              {/* Botão para remover dos favoritos */}
              <TouchableOpacity
                style={styles.botaoCoracao}
                onPress={() => removerFavorito(item.id)}
              >
                <Ionicons
                  name="heart"
                  size={25}
                  color="#D71920"
                />
              </TouchableOpacity>

            </View>
          )}
        />

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },

  lista: {
    paddingBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },

  imagem: {
    width: 85,
    height: 85,
    borderRadius: 10,
    backgroundColor: "#ddd",
    resizeMode: "contain",
  },

  informacoes: {
    flex: 1,
    marginLeft: 15,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },

  categoria: {
    fontSize: 13,
    color: "#777",
    marginBottom: 8,
  },

  preco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D71920",
  },

  botaoCoracao: {
    padding: 8,
  },

  vazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    marginTop: -80,
  },

  textoVazio: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    textAlign: "center",
  },

  subTexto: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },
});