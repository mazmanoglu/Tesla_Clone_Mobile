import React from "react";
import { View, Text, FlatList, Dimensions, StatusBar } from "react-native";
import styles from "./style";
import cars from "./cars";
import CarItem from "../carItems";

const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        // snapToInterval={Dimensions.get("screen").height}
        snapToInterval={WINDOW_HEIGHT + STATUS_BAR_HEIGHT}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
