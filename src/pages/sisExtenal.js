import * as React from "react";
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Styles } from "../styles";

export default function PageSisExtenal() {
    return Platform.OS === "web" ? (
        <iframe src="https://www.ip4y.com.br/" height={'100%'} width={'100%'} />
      ) : (
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://www.ip4y.com.br/" }}
            style={Styles.container}
          />
        </View>
      )
} 
