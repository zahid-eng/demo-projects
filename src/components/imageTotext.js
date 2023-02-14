import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';

const ImagetoText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    launchImageLibrary([], setImage);
  }, []);

  useEffect(() => {
    (async () => {
      if (image) {
        console.log('IMAGE', image);
        const result = await TextRecognition.recognize(image.assets[0].uri);

        console.log('RESULT', result);
        setText(result);
      }
    })();
  }, [image]);

  return (
    <View>
      <Text>imageTotext</Text>
      {text ? <Text>{text}</Text> : null}
    </View>
  );
};

export default ImagetoText;
