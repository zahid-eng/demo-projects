import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import HTMLView from 'react-native-htmlview';
const RichText = ({richTextRef, editorCallback}) => {
  // function handleHeightChange(height) {
  //   console.log('editor height change:', height);

  // }

  return (
    <RichEditor
      disabled={false}
      initialHeight={300}
      style={{backgroundColor: 'blue'}}
      ref={richTextRef}
      placeholder={'Start Writing Here'}
      onChange={text => console.log('text:' + text)}
      editorInitializedCallback={editorCallback}
      // onHeightChange={handleHeightChange}
    />
  );
};

export default RichText;
