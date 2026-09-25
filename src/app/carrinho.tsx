import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router'

export default function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);

  const preco = 299.90;
  const total = preco * quantidade;

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => router.back()}
        >
          <Text style={styles.botaoVoltarTexto}>Voltar</Text>
        </TouchableOpacity>
      <ScrollView>
        
        <Text style={styles.titulo}>
          Meu Carrinho
        </Text>

        <View style={styles.produto}>

          <Image
            source={require('../../assets/images/produtos/tenis1.png')}
            style={styles.imagem}
            resizeMode="contain"
          />

          <View style={styles.informacoes}>

            <Text style={styles.nome}>
              Tênis de Corrida Performance
            </Text>

            <Text style={styles.preco}>
              R$ {preco.toFixed(2).replace('.', ',')}
            </Text>

            <View style={styles.quantidadeContainer}>

              <TouchableOpacity
                style={styles.botaoQuantidade}
                onPress={() =>
                  quantidade > 1 && setQuantidade(quantidade - 1)
                }
              >
                <Text style={styles.botaoTexto}>−</Text>
              </TouchableOpacity>

              <Text style={styles.quantidade}>
                {quantidade}
              </Text>

              <TouchableOpacity
                style={styles.botaoQuantidade}
                onPress={() =>
                  setQuantidade(quantidade + 1)
                }
              >
                <Text style={styles.botaoTexto}>+</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

        <View style={styles.resumo}>

          <Text style={styles.resumoTitulo}>
            Resumo da compra
          </Text>

          <View style={styles.linha}>
            <Text>Subtotal</Text>
            <Text>
              R$ {total.toFixed(2).replace('.', ',')}
            </Text>
          </View>

          <View style={styles.linha}>
            <Text>Frete</Text>
            <Text>Grátis</Text>
          </View>

          <View style={styles.linhaTotal}>
            <Text style={styles.totalTexto}>
              Total
            </Text>

            <Text style={styles.totalValor}>
              R$ {total.toFixed(2).replace('.', ',')}
            </Text>
          </View>

        </View>

        <TouchableOpacity style={styles.finalizar}>
          <Text style={styles.finalizarTexto}>
            Finalizar compra
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 25,
    color: '#111111',
  },

  botaoVoltar: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },

  botaoVoltarTexto: {
    color: '#e52323',
    fontSize: 16,
    fontWeight: 'bold',
  },

  produto: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e2e5e9',
    borderRadius: 15,
    padding: 12,
  },

  imagem: {
    width: 110,
    height: 110,
  },

  informacoes: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },

  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#111111',
  },

  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  botaoQuantidade: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  quantidade: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },

  resumo: {
    marginTop: 25,
    padding: 18,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
  },

  resumoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  linhaTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },

  totalTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  totalValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e52323',
  },

  finalizar: {
    backgroundColor: '#e52323',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },

  finalizarTexto: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  botaoVoltar: {
  marginTop: 40,
  marginBottom: 15,
  backgroundColor: '#ffffff',
  paddingVertical: 10,
  paddingHorizontal: 18,
  borderRadius: 20,
  alignSelf: 'flex-start',
},

textoVoltar: {
  color: '#e52323',
  fontSize: 15,
  fontWeight: 'bold',
},
});