import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

 const cardImage = [
   require('../screens/asset/imges/card1.png'),
   require('../screens/asset/imges/card2.png'),
   require('../screens/asset/imges/card3.png'),
   require('../screens/asset/imges/card4.png'),
   require('../screens/asset/imges/card5.png'),
   require('../screens/asset/imges/card6.png'),
 ];

const Card = (props) => {

  return <Image style={styles.card} source={cardImage[props.cardIndex]} />;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
});