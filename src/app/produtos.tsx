import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const produtos = [
  {
    id: 1,
    nome: "Tênis Esportivo",
    preco: "R$ 199,90",
    avaliacao: "4.8",
    imagem: require("../../assets/images/produtos/tenis1.png"),
  },
  {
    id: 2,
    nome: "Camisa Fitness",
    preco: "R$ 89,90",
    avaliacao: "4.7",
    imagem: require("../../assets/images/produtos/camisa1.png"),
  },
  {
    id: 3,
    nome: "Calça Legging",
    preco: "R$ 119,90",
    avaliacao: "4.9",
    imagem: require("../../assets/images/produtos/calcalegging.png"),
  },
];

export default function Produtos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* CABEÇALHO */}
        <View style={styles.header}>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.logo}>
              FitZone
            </Text>

            <Text style={styles.subtitulo}>
              Produtos esportivos
            </Text>
          </View>

          <TouchableOpacity style={styles.iconeBotao}>
            <Ionicons
              name="bag-outline"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>

        </View>

        {/* CAMPO DE PESQUISA */}
        <View style={styles.pesquisaContainer}>

          <Ionicons
            name="search-outline"
            size={21}
            color="#777777"
          />

          <TextInput
            placeholder="Buscar produtos..."
            placeholderTextColor="#888888"
            style={styles.pesquisa}
          />

        </View>

        {/* TÍTULO E FILTRO */}
        <View style={styles.tituloLinha}>

          <View>
            <Text style={styles.titulo}>
              Todos os produtos
            </Text>

            <Text style={styles.quantidade}>
              Encontre o produto ideal para você
            </Text>
          </View>

          <TouchableOpacity style={styles.filtroBotao}>
            <Ionicons
              name="options-outline"
              size={20}
              color="#e52323"
            />
          </TouchableOpacity>

        </View>

        {/* CATEGORIAS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categorias}
        >

          <TouchableOpacity style={styles.categoriaAtiva}>
            <Text style={styles.textoCategoriaAtiva}>
              Todos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.textoCategoria}>
              Roupas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.textoCategoria}>
              Calçados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.textoCategoria}>
              Acessórios
            </Text>
          </TouchableOpacity>

        </ScrollView>

        {/* GRADE DE PRODUTOS */}
        <View style={styles.gradeProdutos}>

          {produtos.map((produto) => (

            <TouchableOpacity
              key={produto.id}
              style={styles.cardProduto}
              onPress={() => router.push(`/produto/${produto.id}`)}
            >

              {/* IMAGEM DO PRODUTO */}
              <View style={styles.imagemContainer}>

                <Image
                  source={produto.imagem}
                  style={styles.imagemProduto}
                />

                <View style={styles.favorito}>

                  <Ionicons
                    name="heart-outline"
                    size={20}
                    color="#e52323"
                  />

                </View>

              </View>

              {/* INFORMAÇÕES DO PRODUTO */}
              <View style={styles.informacoesProduto}>

                <Text style={styles.nomeProduto}>
                  {produto.nome}
                </Text>

                <View style={styles.avaliacao}>

                  <Ionicons
                    name="star"
                    size={15}
                    color="#f4b400"
                  />

                  <Text style={styles.textoAvaliacao}>
                    {produto.avaliacao}
                  </Text>

                </View>

                <Text style={styles.precoProduto}>
                  {produto.preco}
                </Text>

              </View>

            </TouchableOpacity>

          ))}

        </View>

        {/* ESPAÇAMENTO FINAL */}
        <View style={styles.espacamentoFinal} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    backgroundColor: "#e52323",
    paddingHorizontal: 22,
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  botaoVoltar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#e52323",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#ffffff",
    fontSize: 13,
    marginTop: 3,
  },

  iconeBotao: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#e52323",
    alignItems: "center",
    justifyContent: "center",
  },

  pesquisaContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#e2e5e9",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
  },

  pesquisa: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#333333",
  },

  tituloLinha: {
    marginHorizontal: 20,
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },

  quantidade: {
    fontSize: 13,
    color: "#888888",
    marginTop: 5,
  },

  filtroBotao: {
    width: 43,
    height: 43,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  categorias: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 10,
  },

  categoriaAtiva: {
    backgroundColor: "#e52323",
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 22,
  },

  textoCategoriaAtiva: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  categoria: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#ffffff",
  },

  textoCategoria: {
    color: "#666666",
  },

  gradeProdutos: {
    paddingHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardProduto: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    marginBottom: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e2e5e9",
  },

  imagemContainer: {
    height: 155,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  imagemProduto: {
    width: "85%",
    height: "85%",
    resizeMode: "contain",
  },

  favorito: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  informacoesProduto: {
    padding: 13,
  },

  nomeProduto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333333",
    minHeight: 38,
  },

  avaliacao: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  textoAvaliacao: {
    fontSize: 12,
    color: "#777777",
    marginLeft: 5,
  },

  precoProduto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111111",
    marginTop: 9,
  },

  espacamentoFinal: {
    height: 30,
  },

});