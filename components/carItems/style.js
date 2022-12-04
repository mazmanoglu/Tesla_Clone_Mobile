import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

//const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
const WINDOW_WIDTH = Dimensions.get("window").width;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    // height: Dimensions.get("window").height,
     height: Platform.OS === 'android'? WINDOW_HEIGHT + STATUS_BAR_HEIGHT : WINDOW_HEIGHT,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  headline: {
    fontSize: 40,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  subtitleCTA: {
    textDecorationLine: "underline",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
