import React, { useState } from "react";
import { StatusBar, View } from "react-native";

import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const [halaman, setHalaman] = useState("login");
  const [nama, setNama] = useState("");

  const handleLogin = (email) => {
    setNama(email.split("@")[0]);
    setHalaman("home");
  };

  const handleLogout = () => {
    setHalaman("login");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      {halaman === "login" ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Home nama={nama} onLogout={handleLogout} />
      )}
    </View>
  );
}