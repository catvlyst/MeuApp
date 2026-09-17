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
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>FitZone</Text>
            <Text style={styles.subtitulo}>Produtos esportivos</Text>
          </View>

          <TouchableOpacity style={styles.iconeBotao}>
            <Ionicons name="bag-outline" size={25} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Campo de pesquisa */}
        <View style={styles.pesquisaContainer}>
          <Ionicons name="search-outline" size={21} color="#777777" />

          <TextInput
            placeholder="Buscar produtos..."
            placeholderTextColor="#888888"
            style={styles.pesquisa}
          />
        </View>

        {/* Título e filtro */}
        <View style={styles.tituloLinha}>
          <View>
            <Text style={styles.titulo}>Todos os produtos</Text>
            <Text style={styles.quantidade}>
              Encontre o produto ideal para você
            </Text>
          </View>

          <TouchableOpacity style={styles.filtroBotao}>
            <Ionicons name="options-outline" size={20} color="#af4a4a" />
          </TouchableOpacity>
        </View>

        {/* Categorias */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categorias}
        >
          <TouchableOpacity style={styles.categoriaAtiva}>
            <Text style={styles.textoCategoriaAtiva}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.textoCategoria}>Roupas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.textoCategoria}>Calçados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.textoCategoria}>Acessórios</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Grade de produtos */}
        <View style={styles.gradeProdutos}>
          {produtos.map((produto) => (

  <TouchableOpacity
    key={produto.id}
    style={styles.cardProduto}
  >
              <View style={styles.imagemContainer}>
                <Image source={produto.imagem} style={styles.imagemProduto} />

                <View style={styles.favorito}>
                  <Ionicons
                    name="heart-outline"
                    size={20}
                    color="#af4a4a"
                  />
                </View>
              </View>

              <View style={styles.informacoesProduto}>
                <Text style={styles.nomeProduto}>{produto.nome}</Text>

                <View style={styles.avaliacao}>
                  <Ionicons name="star" size={15} color="#f4b400" />
                  <Text style={styles.textoAvaliacao}>
                    {produto.avaliacao}
                  </Text>
                </View>

                <Text style={styles.precoProduto}>{produto.preco}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Espaçamento final */}
        <View style={styles.espacamentoFinal} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f8",
  },

  header: {
    backgroundColor: "#af4a4a",
    paddingHorizontal: 22,
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#ffe4e4",
    fontSize: 13,
    marginTop: 3,
  },

  iconeBotao: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#c96d6d",
    alignItems: "center",
    justifyContent: "center",
  },

  pesquisaContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f0dede",
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
    borderColor: "#f0dede",
    alignItems: "center",
    justifyContent: "center",
  },

  categorias: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 10,
  },

  categoriaAtiva: {
    backgroundColor: "#af4a4a",
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
    borderColor: "#efdada",
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
    borderColor: "#f1dfdf",
  },

  imagemContainer: {
    height: 155,
    backgroundColor: "#fceeee",
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
    color: "#af4a4a",
    marginTop: 9,
  },

  espacamentoFinal: {
    height: 30,
  },
});