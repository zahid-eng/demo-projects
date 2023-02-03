import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increament, decreament} from '../../redux/counterSlice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  console.log('counter', counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.addstyle}
        onPress={() => dispatch(increament())}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>+</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: '500', margin: 10}}>
        {counter}
      </Text>
      <TouchableOpacity
        style={styles.addstyle}
        onPress={() => dispatch(decreament())}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#fff'}}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addstyle: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    opacity: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
