import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "../styles";

export default function PageIndex() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require("../assets/logo-ip4y.fw.png")}
      />

      <Text style={Styles.title}>Sejá bem vindo!</Text>

      <TouchableOpacity
        style={Styles.bottonForm}
        onPress={() => {
          navigation.navigate("PageSisExtenal");
        }}
      >
        <Text style={Styles.textBottonForm}>Formulário do Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}
