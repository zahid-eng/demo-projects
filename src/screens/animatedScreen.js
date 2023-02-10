import { View, Text, StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const AnimatedScreen = (props) => {

  const Max =100
  const per = Max/windowHeight
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Text
          style={{
            width: 40,
            textAlign:'center',
            fontSize: 18,
            fontWeight: 'bold',
            marginRight: 10,
            color: '#6c25be',
            opacity:0.9
          }}>
          {props.progress}
        </Text>
      </View>
      <View style={styles.front}>
        <Text
          style={{
            color: 'purple',
            textAlign: 'center',
            color: '#6c25be',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
        {props.text}
        </Text>
      </View>
    </View>
  );
}

export default AnimatedScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 10,
  },

  img: {
    height: windowHeight / 2,
    width: windowWidth / 2,
  },
  back: {
    height: 50,
    width: windowWidth / 1.05,
    backgroundColor: 'gray',
    opacity:0.2,
    borderRadius: 5,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  front: {
    height: 50,
    width: windowWidth / 1.5,
    justifyContent: 'center',
    backgroundColor: '#9925be',
    opacity: 0.2,
    borderRadius: 5,
  },
});