import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
  icon,
  placeholder,
  text,
  onTextChanged = () => {},
  iconSize = 25,
  secureTextentry = false,
  value,
  error,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: 'gray',
          borderBottomWidth: 2.5,
          opacity: 0.3,
          marginTop: 10,
          marginHorizontal: 10,
        }}>
        <Icon name={icon} size={iconSize} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={'gray'}
          text={text}
          onChangeText={onTextChanged}
          secureTextEntry={secureTextentry}
          value={value}
          error={error}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
  },
  error: {color: 'red', fontSize: 15, marginLeft: 20},
});

export default CustomInput;
