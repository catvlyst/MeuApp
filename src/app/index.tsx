import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* CABEÇALHO */}
        <View style={styles.header}>

          <TouchableOpacity>
            <Octicons
              name="three-bars"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.logo}>
            Fit<Text style={styles.logoRed}>Zone</Text>
          </Text>

          <View style={styles.headerIcons}>

            <TouchableOpacity onPress={() => router.push("/login")}>
              <Feather name="user" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/carrinho")}>
              <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>

          </View>

        </View>

        {/* PESQUISA */}
        <View style={styles.searchContainer}>

          <MaterialCommunityIcons
            name="magnify"
            size={24}
            color="black"
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar produtos..."
            placeholderTextColor="#8b95a5"
          />

        </View>

        {/* BANNER */}
        <View style={styles.banner}>

          <Text style={styles.bannerTitle}>
            MOVIMENTO
          </Text>

          <Text style={styles.bannerTitle}>
            PERFORMANCE
          </Text>

          <Text style={styles.bannerRed}>
            EVOLUÇÃO
          </Text>

          <Text style={styles.bannerDescription}>
            Mais que esportes,{'\n'}
            um estilo de vida.
          </Text>

          <TouchableOpacity
            style={styles.bannerButton}
            onPress={() => router.push('/produtos')}
          >
            <Text style={styles.bannerButtonText}>
              Explorar produtos →
            </Text>
          </TouchableOpacity>
        

        </View>

        {/* BENEFÍCIOS */}
        <View style={styles.benefits}>

          {/* BENEFÍCIO 1 */}
          <View style={styles.benefit}>

            <AntDesign
              style={styles.benefitIcon}
              name="car"
              size={24}
              color="#e52323"
            />

            <Text style={styles.benefitText}>
              Frete rápido para{'\n'}
              todo o Brasil
            </Text>

          </View>

          {/* BENEFÍCIO 2 */}
          <View style={styles.benefit}>

            <MaterialCommunityIcons
              style={styles.benefitIcon}
              name="security"
              size={24}
              color="#e52323"
            />

            <Text style={styles.benefitText}>
              Compra segura{'\n'}
              e protegida
            </Text>

          </View>

          {/* BENEFÍCIO 3 */}
          <View style={styles.benefit}>

            <Text style={styles.benefitIcon}>
              ☆
            </Text>

            <Text style={styles.benefitText}>
              Qualidade e{'\n'}
              excelência
            </Text>

          </View>

        </View>

        {/* DESTAQUES */}
        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Destaques
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/produtos')}
          >
            <Text style={styles.seeAll}>
              Ver todos →
            </Text>
          </TouchableOpacity>

        </View>

        {/* PRODUTOS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.products}
        >

          {/* PRODUTO 1 */}
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => router.push('/produto/1')}
          >

            <Image
              source={require('../../assets/images/produtos/tenis1.png')}
              style={styles.productImage}
              resizeMode="contain"
            />

            <Text style={styles.productName}>
              Tênis de Corrida Performance
            </Text>

            <Text style={styles.productPrice}>
              R$ 299,90
            </Text>

            <Text style={styles.rating}>
              ★ 4.8 (120)
            </Text>

          </TouchableOpacity>

          {/* PRODUTO 2 */}
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => router.push('/produto/2')}
          >

            <Image
              source={require('../../assets/images/produtos/camisavasco.png')}
              style={styles.productImage}
            />

            <Text style={styles.productName}>
              Camisa 2 Vasco da Gama Oficial
            </Text>

            <Text style={styles.productPrice}>
              R$ 299,90
            </Text>

            <Text style={styles.rating}>
              ★ 5.0 (89)
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.productCard}
            onPress={() => router.push('/produto/2')}
          >

            <Image
              source={require('../../assets/images/produtos/camisamengo.png')}
              style={styles.productImage}
            />

            <Text style={styles.productName}>
              Camisa 2 Flamengo Oficial
            </Text>

            <Text style={styles.productPrice}>
              R$ 299,90
            </Text>

            <Text style={styles.rating}>
              ★ 5.0 (89)
            </Text>

          </TouchableOpacity>

          {/* PRODUTO 3 */} 

          <View style={styles.productCard}>

            <Image
              source={require('../../assets/images/produtos/camisa1.png')}
              style={styles.productImage}
              resizeMode="contain"
            />

            <Text style={styles.productName}>
              Camiseta Esportiva Dry Fit
            </Text>

            <Text style={styles.productPrice}>
              R$ 129,90
            </Text>

            <Text style={styles.rating}>
              ★ 4.7 (89)
            </Text>

          </View>

          {/* PRODUTO 3 */}
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => router.push('/produto/3')}
          >

            <Image
              source={require('../../assets/images/produtos/calcalegging.png')}
              style={styles.productImage}
              resizeMode="contain"
            />

            <Text style={styles.productName}>
              Calça Legging Feminina
            </Text>

            <Text style={styles.productPrice}>
              R$ 159,90
            </Text>

            <Text style={styles.rating}>
              ★ 4.6 (64)
            </Text>

          </TouchableOpacity>

        </ScrollView>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#111111',
  },

  logoRed: {
    color: '#e52323',
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  searchContainer: {
    height: 50,
    marginHorizontal: 20,
    marginBottom: 18,
    borderRadius: 25,
    backgroundColor: '#f1f3f6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  banner: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 20,
    backgroundColor: '#15191b',
    padding: 25,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  bannerTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bannerRed: {
    color: '#e52323',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 15,
  },

  bannerDescription: {
    color: '#ffffff',
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 20,
  },

  bannerButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },

  bannerButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111111',
  },

  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 22,
    paddingHorizontal: 10,
  },

  benefit: {
    flex: 1,
    alignItems: 'center',
  },

  benefitIcon: {
    fontSize: 25,
    marginBottom: 8,
    color: '#e52323',
  },

  benefitText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#222222',
    lineHeight: 18,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 20,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#111111',
  },

  seeAll: {
    color: '#e52323',
    fontSize: 15,
    fontWeight: 'bold',
  },

  products: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
  },

  productCard: {
    width: 160,
    marginRight: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e5e9',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },

  productImage: {
    width: 150,
    height: 140,
    resizeMode: 'contain',
  },

  productName: {
    fontSize: 14,
    color: '#222222',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  productPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111111',
    paddingHorizontal: 10,
    paddingTop: 5,
  },

  rating: {
    fontSize: 12,
    color: '#777777',
    padding: 10,
  },

  bottomMenu: {
    height: 75,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomItem: {
    alignItems: 'center',
  },

  bottomIcon: {
    fontSize: 23,
    color: '#222222',
  },

  bottomText: {
    fontSize: 11,
    color: '#222222',
    marginTop: 4,
  },

  bottomTextActive: {
    fontSize: 11,
    color: '#e52323',
    fontWeight: 'bold',
    marginTop: 4,
  },

});