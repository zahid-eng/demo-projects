import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Animated,
  TextInput,
  onchange,
} from 'react-native';

import {useState, useRef, useCallback} from 'react';

import React from 'react';
import {onChange} from 'react-native-reanimated';
// import {TextInput} from 'react-native-paper';

const ShakeTextInput = ({
  placeholder,
  onSubmitEditing,
  onfocus,
  ref,
  onPress,
  secureTextentry,
  onChangeText,
  onBlur,
  style,
}) => {
  return (
    <View style={styles.main}>
      <View style={[styles.inputView, style]}>
        <TextInput
          ref={ref}
          style={styles.TextInput}
          placeholder={placeholder}
          placeholderTextColor="#003f5c"
          onChangeText={onChangeText}
          onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)}
          secureTextEntry={secureTextentry}
          onBlur={onBlur}
          onChange={onchange}
          onFocus={onfocus}
        />
      </View>

      {/* <TouchableOpacity
        style={[styles.inputView, styles.btn]}
        onPress={onPress}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
          }}>
          Login
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ShakeTextInput;

const styles = StyleSheet.create({
  // main: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '90%',
    height: 55,
    marginBottom: 20,
    alignSelf: 'center',
  },
  TextInput: {
    height: 45,
    marginLeft: 20,
    textAlign: 'center',
    padding: 10,
  },
  btn: {
    alignSelf: 'center',
    width: '50%',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1.5,
    backgroundColor: 'white',
  },
});
