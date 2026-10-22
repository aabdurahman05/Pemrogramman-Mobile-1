import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password === "") {
      Alert.alert("Peringatan", "Email dan password harus diisi!");
      return;
    }

    onLogin(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.judul}>
        <Text style={styles.title}>MY APP</Text>
        <Text style={styles.title}>UTS MOBILE 1</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="INPUT EMAIL"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="INPUT PASSWORD"
          placeholderTextColor="#555"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>TOMBOL LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  judul: {
    alignItems: "center",
    marginBottom: 85,
  },
  title: {
    fontSize: 25,
    color: "#000000",
    marginBottom: 8,
  },
  form: {
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 52,
    borderWidth: 2,
    borderColor: "#000000",
    paddingHorizontal: 12,
    marginBottom: 20,
    color: "#000000",
    fontSize: 16,
    borderRadius: 10,
  },
  button: {
    width: 180,
    minHeight: 48,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 8,
  },
  buttonText: {
    color: "#000000",
    fontSize: 15,
  },
});