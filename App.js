import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import CarsList from "./components/carsList";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
