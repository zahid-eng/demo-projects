import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Condional_Rendering = ({onpress}) => {
  const arr = [
    {
      title: 'zahid',
      id: 1,
    },
    {
      title: 'ali',
      id: 2,
    },
  ];

  const [selected, setSelected] = useState(arr[0]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {arr.map(item => {
          var isselect = item.id == selected.id;
          return (
            // <TouchableOpacity
            //   onPress={() => setSelected(item)}
            //   style={[
            //     isselect
            //       ? {
            //           borderBottomColor: 'orange',
            //           borderBottomWidth: 5.0,
            //           borderRadius: 2,
            //         }
            //       : {
            //           borderBottomColor: 'white',
            //           borderBottomWidth: 2.0,
            //         },
            //   ]}>
            //   <Text style={{fontSize: 20}}>{item.title}</Text>
            //   <View style={{marginTop: 10}}></View>
            // </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btn,
                isselect
                  ? {
                      backgroundColor: 'red',
                      borderColor: 'blue',
                      borderWidth: 2.0,
                    }
                  : {
                      backgroundColor: 'white',
                      borderColor: 'black',
                      borderWidth: 2.0,
                    },
              ]}>
              <Text
                style={
                  isselect
                    ? {
                        color: 'pink',
                      }
                    : {color: 'orange'}
                }>
                Hello
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Condional_Rendering;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
});
