import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";

const produtos = {
  "1": {
    nome: "Tênis Esportivo",
    preco: "R$ 199,90",
    avaliacao: "4.8",
    avaliacoes: "124 avaliações",
    categoria: "Calçados",
    descricao:
      "Tênis esportivo confortável e moderno, ideal para treinos, caminhadas e atividades do dia a dia.",
    imagem: require("../../../assets/images/produtos/tenis1.png"),
    tamanhos: ["36", "37", "38", "39", "40", "41"],
    cores: ["Preto", "Branco"],
    caracteristicas: [
      "Material respirável",
      "Solado antiderrapante",
      "Palmilha confortável",
      "Design esportivo",
    ],
  },

  "2": {
    nome: "Camisa Fitness",
    preco: "R$ 89,90",
    avaliacao: "4.7",
    avaliacoes: "98 avaliações",
    categoria: "Roupas",
    descricao:
      "Camisa fitness leve e confortável, desenvolvida para proporcionar liberdade de movimento durante os treinos.",
    imagem: require("../../../assets/images/produtos/camisa1.png"),
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Rosa", "Branco"],
    caracteristicas: [
      "Tecido leve",
      "Secagem rápida",
      "Alta respirabilidade",
      "Conforto durante o treino",
    ],
  },

  "3": {
    nome: "Calça Legging",
    preco: "R$ 119,90",
    avaliacao: "4.9",
    avaliacoes: "156 avaliações",
    categoria: "Roupas",
    descricao:
      "Calça legging esportiva com tecido confortável e flexível, perfeita para academia, corrida e outras atividades.",
    imagem: require("../../../assets/images/produtos/calcalegging.png"),
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Cinza"],
    caracteristicas: [
      "Tecido flexível",
      "Cintura alta",
      "Não fica transparente",
      "Conforto e liberdade de movimento",
    ],
  },
};

export default function ProdutoDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const produto = produtos[id as keyof typeof produtos];

  if (!produto) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.erro}>
          <Text style={styles.erroTexto}>Produto não encontrado.</Text>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topo}>
          <TouchableOpacity
            style={styles.botaoIcone}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>

          <Text style={styles.tituloTopo}>Detalhes do produto</Text>

          <TouchableOpacity style={styles.botaoIcone}>
            <Ionicons name="heart-outline" size={24} color="#e52323" />
          </TouchableOpacity>
        </View>

        <View style={styles.imagemContainer}>
          <Image source={produto.imagem} style={styles.imagem} />
        </View>

        <View style={styles.conteudo}>
          <Text style={styles.categoria}>{produto.categoria}</Text>

          <Text style={styles.nome}>{produto.nome}</Text>

          <View style={styles.avaliacao}>
            <Ionicons name="star" size={18} color="#f4b400" />
            <Text style={styles.nota}>{produto.avaliacao}</Text>
            <Text style={styles.avaliacoes}>{produto.avaliacoes}</Text>
          </View>

          <Text style={styles.preco}>{produto.preco}</Text>

          <View style={styles.linha} />

          <Text style={styles.tituloSecao}>Descrição</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>

          <Text style={styles.tituloSecao}>Tamanho</Text>

          <View style={styles.opcoes}>
            {produto.tamanhos.map((tamanho) => (
              <TouchableOpacity key={tamanho} style={styles.opcao}>
                <Text style={styles.textoOpcao}>{tamanho}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.tituloSecao}>Cor</Text>

          <View style={styles.opcoes}>
            {produto.cores.map((cor) => (
              <TouchableOpacity key={cor} style={styles.opcao}>
                <Text style={styles.textoOpcao}>{cor}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.tituloSecao}>Características</Text>

          {produto.caracteristicas.map((caracteristica) => (
            <View key={caracteristica} style={styles.caracteristica}>
              <Ionicons
                name="checkmark-circle"
                size={19}
                color="#e52323"
              />
              <Text style={styles.textoCaracteristica}>
                {caracteristica}
              </Text>
            </View>
          ))}

          <TouchableOpacity style={styles.botaoSacola}>
            <Ionicons name="bag-outline" size={21} color="#ffffff" />
            <Text style={styles.textoBotaoSacola}>
              Adicionar à sacola
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  topo: {
    height: 70,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },

  tituloTopo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },

  botaoIcone: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  imagemContainer: {
    height: 330,
    backgroundColor: "##ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    width: "85%",
    height: "85%",
    resizeMode: "contain",
  },

  conteudo: {
    padding: 22,
  },

  categoria: {
    fontSize: 13,
    color: "#e52323",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  nome: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 6,
  },

  avaliacao: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  nota: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333333",
    marginLeft: 6,
  },

  avaliacoes: {
    fontSize: 13,
    color: "#888888",
    marginLeft: 7,
  },

  preco: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#111111",
    marginTop: 15,
  },

  linha: {
    height: 1,
    backgroundColor: "#ffffff",
    marginVertical: 22,
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 18,
    marginBottom: 10,
  },

  descricao: {
    fontSize: 15,
    lineHeight: 23,
    color: "#666666",
  },

  opcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  opcao: {
    minWidth: 55,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ffffff",
    alignItems: "center",
  },

  textoOpcao: {
    color: "#555555",
    fontWeight: "600",
  },

  caracteristica: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  textoCaracteristica: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 8,
  },

  botaoSacola: {
    height: 54,
    borderRadius: 15,
    backgroundColor: "#e52323",
    marginTop: 28,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  textoBotaoSacola: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  erro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  erroTexto: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 20,
  },

  botaoVoltar: {
    backgroundColor: "#e52323",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },

  textoBotaoVoltar: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});