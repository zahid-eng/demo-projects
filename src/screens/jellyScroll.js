
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { number } from "yup";
import Card from "../components/card";

import {Dimensions, Image, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;


const cards = [
  {img: require('../screens/asset/imges/card1.png')},
  {img: require('../screens/asset/imges/card2.png')},
  {img: require('../screens/asset/imges/card3.png')},
  {img: require('../screens/asset/imges/card4.png')},
  {img: require('../screens/asset/imges/card5.png')},
  {img: require('../screens/asset/imges/card6.png')},
  {img: require('../screens/asset/imges/card1.png')},
  {img: require('../screens/asset/imges/card2.png')},
  {img: require('../screens/asset/imges/card3.png')},
  {img: require('../screens/asset/imges/card4.png')},
  {img: require('../screens/asset/imges/card5.png')},
  {img: require('../screens/asset/imges/card6.png')},
];


const JellyScroll = () => {
  
    const direction = useSharedValue(0);
    

  const scrollHandler = useAnimatedScrollHandler({

    onEndDrag: () => (direction.value = 0),
    onScroll: (event, ctx) => {
      const now = new Date().getTime();
          const {y} = event.contentOffset;
          const dt = now - (ctx?.time ?? 0);
        
          const dy= now - (ctx?.y ?? 0);
          const v = dy / dt;

            console.log('v', v);
          direction.value = Math.sign(v)
          ctx.time = now;
          ctx.y = y;
    },
  });
//  const velocity = useSharedValue(0);
//  const scrollHandler = useAnimatedScrollHandler((event,ctx) => {

//     // console.log('event',event)
//     //translationY.value = event.contentOffset.y;
   
//     const now = new Date().getTime();
//     const {y} = event.contentOffset;
//     const dt = now - (ctx?.time ?? 0);
//     const dy= now - (ctx?.y ?? 0);
//     velocity.value = dy / dt;
//     ctx.time = now;
//     ctx.y = y;
//   });
    


  return (
    <Animated.ScrollView  onScroll={scrollHandler} scrollEventThrottle={16}>
      {cards.map((item,index) => {
       
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const style = useAnimatedStyle(() => {

          const skewY = withSpring(
            interpolate(
              direction.value,
              [-5, 0, 5],
              [-Math.PI / 9, 0, Math.PI / 9],
            ),
          );
           
          return {
            transform: [{ skewY: `${skewY}rad` }],
          };
        })
        return (
          <Animated.View
            key={index}
            style={[
              {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 45,
              },
              style,
            ]}>
            <Image
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                borderRadius: 16,
              }}
                 source={item.img}
            />
          </Animated.View>
        );
      })}

      {/* <Card cardIndex={0} />
      <Card cardIndex={1} /> */}
    </Animated.ScrollView>
  );
};

export default JellyScroll;


