import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import React, {useRef, useState} from 'react';
import RichText from '../components/RichText';

const RichTextScreen = () => {
  const richText = React.useRef();

  function editorInitializedCallback() {
    richText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        'Toolbar click, selected items (insert end callback):',
        items,
      );
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.richTextEditor}>
        <RichText
          richTextRef={richText}
          editorCallback={editorInitializedCallback}
        />
      </ScrollView>

      <RichToolbar
        editor={richText}
        style={{
          borderRadius: 10,
        }}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.heading1,
        ]}
        iconMap={{
          [actions.heading1]: ({tintColor}) => (
            <Text style={[{color: tintColor}]}>H1</Text>
          ),
        }}
      />
    </View>
  );
};

export default RichTextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  richTextEditor: {
    paddingVertical: 20,
  },
});
