import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";

import {
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Perfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  function cadastrar() {
    if (
      !nome ||
      !email ||
      !senha ||
      !confirmarSenha ||
      !dataNascimento
    ) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>Seja FitZone</Text>

        {/* Nome */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#333333" />

          <TextInput
            placeholder="Nome do usuário"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#333333" />

          <TextInput
            placeholder="Digite seu email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#333333" />

          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Confirmar senha */}
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#333333" />

          <TextInput
            placeholder="Confirme sua senha"
            secureTextEntry
            style={styles.input}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </View>

        {/* Data de nascimento */}
        <View style={styles.inputContainer}>
          <FontAwesome5
            name="calendar-alt"
            size={18}
            color="#333333"
          />

          <TextInput
            placeholder="DD/MM/AAAA"
            style={styles.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
            keyboardType="numeric"
          />
        </View>

        {/* Botão */}
        <TouchableOpacity
          style={styles.botao}
          onPress={cadastrar}
        >
          <Text style={styles.textoBotao}>
            Cadastrar
          </Text>
        </TouchableOpacity>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.loginLink}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
    padding: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#D71920",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#D71920",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    flexWrap: "wrap",
  },

  loginText: {
    color: "#222222",
    fontSize: 14,
  },

  loginLink: {
    color: "#D71920",
    fontSize: 14,
    fontWeight: "bold",
  },
});
