import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const categorias = [
  {
    id: 5,
    nome: 'Masculino',
    descricao: 'Produtos esportivos masculinos',
    imagem: require('../../assets/images/categorias/masculino.jpg'),
    icone: 'man-outline',
  },
  {
    id: 6,
    nome: 'Feminino',
    descricao: 'Produtos esportivos femininos',
    imagem: require('../../assets/images/categorias/feminino.jpg'),
    icone: 'woman-outline',
  },
  {
    id: 1,
    nome: 'Camisetas',
    descricao: 'Camisetas esportivas para todos os estilos',
    imagem: require('../../assets/images/categorias/camiseta.jpg'),
    icone: 'shirt-outline',
  },
  {
    id: 2,
    nome: 'Calçados',
    descricao: 'Tênis e calçados esportivos',
    imagem: require('../../assets/images/categorias/calcados.jpg'),
    icone: 'footsteps-outline',
  },
  {
    id: 3,
    nome: 'Acessórios',
    descricao: 'Itens para completar seu treino',
    imagem: require('../../assets/images/categorias/acessorios.jpg'),
    icone: 'fitness-outline',
  },
  {
    id: 4,
    nome: 'Futebol',
    descricao: 'Tudo para quem ama futebol',
    imagem: require('../../assets/images/categorias/futebol.jpg'),
    icone: 'football-outline',
  },
];

export default function Categorias() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>FitZone</Text>

            <Text style={styles.subtitulo}>
              Encontre o que você precisa
            </Text>
          </View>

          <View style={styles.iconeHeader}>
            <Ionicons
              name="grid-outline"
              size={23}
              color="#e52323"
            />
          </View>
        </View>

        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>
            Categorias
          </Text>

          <Text style={styles.descricao}>
            Explore nossos produtos por categoria
          </Text>
        </View>

        <View style={styles.lista}>
          {categorias.map((categoria) => (
            <TouchableOpacity
              key={categoria.id}
              activeOpacity={0.88}
              style={styles.card}
              onPress={() =>
  router.push({
    pathname: "/produtos",
    params: { categoria: categoria.nome },
  })
}
            >
              <View style={styles.areaTexto}>
                <View style={styles.icone}>
                  <Ionicons
                    name={categoria.icone as any}
                    size={23}
                    color="#ffffff"
                  />
                </View>

                <View style={styles.textos}>
                  <Text style={styles.nome}>
                    {categoria.nome}
                  </Text>

                  <Text style={styles.descricaoCard}>
                    {categoria.descricao}
                  </Text>
                </View>

                <View style={styles.seta}>
                  <Ionicons
                    name="chevron-forward"
                    size={19}
                    color="#e52323"
                  />
                </View>
              </View>

              <View style={styles.areaImagem}>
                <Image
                  source={categoria.imagem}
                  style={styles.imagem}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  conteudo: {
    paddingBottom: 35,
  },

  header: {
    backgroundColor: '#e52323',
    paddingHorizontal: 22,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    color: '#ffffff',
    fontSize: 29,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#ffffff',
    fontSize: 13,
    marginTop: 4,
    opacity: 0.9,
  },

  iconeHeader: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloContainer: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
  },

  descricao: {
    fontSize: 14,
    color: '#777777',
    marginTop: 6,
  },

  lista: {
    paddingHorizontal: 18,
  },

  card: {
    height: 155,
    marginBottom: 17,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6,
  },

  areaTexto: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
    position: 'relative',
  },

  icone: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e52323',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  textos: {
    paddingRight: 4,
  },

  nome: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
  },

  descricaoCard: {
    color: '#888888',
    fontSize: 12,
    marginTop: 4,
    lineHeight: 17,
  },

  seta: {
    position: 'absolute',
    right: 13,
    top: 13,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  areaImagem: {
    width: '42%',
    height: '100%',
    backgroundColor: '#eeeeee',
    overflow: 'hidden',
  },

  imagem: {
    width: '100%',
    height: '100%',
  },
});