import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";

export default function Home({ nama, onLogout }) {
  const bukaMenu = (menu) => {
    switch (menu) {
      case "Biodata":
        Alert.alert(
          "Biodata Mahasiswa",
          `Nama: ${nama || "Aab Durahman"}\nNIM: 4112755201250130\nJurusan: Informatika`
        );
        break;

      case "Pendidikan":
        Alert.alert(
          "Pendidikan",
          "Perguruan Tinggi: Horizon University Indonesia\nProgram Studi: Informatika"
        );
        break;

      case "Skill":
        Alert.alert(
          "Skill",
          "1. HTML dan CSS\n2. JavaScript dasar\n3. React Native\n4. Database dasar"
        );
        break;

      case "Hobi":
        Alert.alert(
          "Hobi",
          "1. Membaca\n2. Bermain game\n3. Belajar teknologi\n4. Berenang."
        );
        break;
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>HOME PAGE</Text>

      {/* FOTO DAN PROFIL */}
      <View style={styles.profileBox}>
        <Image
          source={require("../assets/aab.jpeg")}
          style={styles.fotoProfil}
          resizeMode="cover"
        />

        <Text style={styles.nama}>
          {nama || "NAMA KAMU"}
        </Text>

        <Text style={styles.subtitle}>
          Mahasiswa Informatika
        </Text>
      </View>

      {/* MENU */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => bukaMenu("Biodata")}
        >
          <Text style={styles.menuText}>MENU 1</Text>
          <Text style={styles.menuSubtitle}>Biodata</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => bukaMenu("Pendidikan")}
        >
          <Text style={styles.menuText}>MENU 2</Text>
          <Text style={styles.menuSubtitle}>Pendidikan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => bukaMenu("Skill")}
        >
          <Text style={styles.menuText}>MENU 3</Text>
          <Text style={styles.menuSubtitle}>Skill</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => bukaMenu("Hobi")}
        >
          <Text style={styles.menuText}>MENU 4</Text>
          <Text style={styles.menuSubtitle}>Hobi</Text>
        </TouchableOpacity>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logout}
        onPress={onLogout}
      >
        <Text style={styles.logoutText}>
          TOMBOL LOGOUT
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    color: "#000000",
    marginBottom: 35,
  },

  profileBox: {
    width: "100%",
    minHeight: 235,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    padding: 15,
    borderRadius: 20,
  },

  fotoProfil: {
    width: 110,
    height: 110,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    marginBottom: 15,
  },

  nama: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 13,
    color: "#555555",
    marginTop: 5,
  },

  menuContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  menu: {
    width: "48%",
    height: 85,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 10,
  },

  menuText: {
    fontSize: 17,
    color: "#000000",
  },

  menuSubtitle: {
    fontSize: 13,
    color: "#555555",
    marginTop: 4,
  },

  logout: {
    width: 200,
    minHeight: 50,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    padding: 8,
  },

  logoutText: {
    fontSize: 15,
    color: "#000000",
  },
});