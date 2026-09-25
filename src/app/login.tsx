import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarSenha, setLembrarSenha] = useState(false);

  function entrar() {
    if (!usuario || !senha) {
      Alert.alert('Atenção', 'Preencha o nome de usuário e a senha.');
      return;
    }

    router.replace('/');
  }

  function esqueciMinhaSenha() {
    Alert.alert('Recuperar senha', 'A recuperação de senha será adicionada em breve.');
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Login</Text>
        </View>

        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#777"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#777"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={styles.rememberContainer}
              activeOpacity={0.8}
              onPress={() => setLembrarSenha(!lembrarSenha)}
            >
              <View style={[styles.checkbox, lembrarSenha && styles.checkboxChecked]}>
                {lembrarSenha && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.optionText}>Lembrar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={esqueciMinhaSenha}>
              <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={entrar}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.registerRow}>
            <Text style={styles.registerText}>Não possui uma conta? </Text>
            <TouchableOpacity onPress={() => router.push('/perfil')}>
              <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  header: {
    backgroundColor: '#ee1216',
    paddingVertical: 24,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },
  content: {
    padding: 24,
  },
  input: {
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 18,
    marginBottom: 16,
    fontSize: 16,
    color: '#222222',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#555',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#ee1216',
    borderColor: '#ee1216',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionText: {
    color: '#222222',
    fontSize: 14,
  },
  link: {
    color: '#0000ee',
    fontSize: 14,
  },
  loginButton: {
    height: 58,
    backgroundColor: '#ee1216',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flexWrap: 'wrap',
  },
  registerText: {
    color: '#222222',
    fontSize: 14,
  },
});
