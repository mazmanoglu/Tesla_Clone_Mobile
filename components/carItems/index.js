import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../styledButton";

const CarItem = (props) => {
  //  const { name, tagLine, image, tagLineCTA } = props;
  const { name, tagLine, image, tagLineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.headline}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} {/* use this to put a Javascript space, or write &nbsp; */}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("CO was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"ExIstIng Inventory"}
          onPress={() => {
            console.warn("EI was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
