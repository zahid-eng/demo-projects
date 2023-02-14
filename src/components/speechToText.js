import Voice from '@react-native-community/voice';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, IconButton, Searchbar} from 'react-native-paper';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

import {duration} from 'moment';

const _color = '#6E01EF';
const _size = 100;

const SpeechToText = () => {
  // let silenceTimer = useRef(null);
  const Texthide1 = () => <Text>Listening</Text>;
  const Texthide2 = () => (
    <Text style={{color: 'red'}}>Didn't Catch Please Try Again Later</Text>
  );
  const countries = [
    {id: 1, name: 'Pakistan'},
    {id: 2, name: 'India'},
    {id: 4, name: 'Australia'},
    {id: 5, name: 'denMark'},
    {id: 6, name: 'USA'},
    {id: 7, name: 'Canada'},
    {id: 8, name: 'Malaysia'},
    {id: 9, name: 'Nepal'},
    {id: 10, name: 'Sri lanka'},
    {id: 11, name: 'Ukraine'},
    {id: 12, name: 'Saudia Arabia'},
    {id: 13, name: 'Palestine'},
    {id: 14, name: 'Turkey'},
    {id: 15, name: 'France'},
    {id: 16, name: 'Germany'},
    {id: 17, name: 'Syria'},
    {id: 18, name: 'Iraq'},
    {id: 19, name: 'Iran'},
    {id: 20, name: 'Thailand'},
    {id: 21, name: 'Bangladesh'},
  ];

  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [isclicked, setIsClicked] = useState(false);
  const [data, SetData] = useState(countries);
  const [searchBoxValue, setSearchBoxValue] = useState();
  const [modalVisible, setModalVisible] = useState(true);
  const [length, isSetlength] = useState();
  const [count, setCount] = useState(3);
  const [text, setText] = useState(false);

  const onSpeechStart = e => {
    setStarted('True');
  };

  const onSpeechEnd = () => {
    setStarted(null);
    setEnd('True');
  };
  const onSpeechError = e => {
    setError(JSON.stringify(e.error));
  };
  const onSpeechResults = e => {
    setResults(e.value);
  };
  const onSpeechPartialResults = e => {
    let Texts = e.value.map(x => x);
    const val = [Texts].toString();
    console.log('textstexts', val);

    setSearchBoxValue(val);
    onSearchtxt(val);
    setPartialResults(e.value);
    console.log('onSpeechPartialResults', e);
    if (val) {
      setTimeout(() => {
        setIsClicked(false);
        stopSpeechRecognizing();
      }, 100);
    }
  };
  const onSpeechVolumeChanged = e => {
    setPitch(e.value);
  };
  // Voice.onSpeechStart = onSpeechStart;
  // Voice.onSpeechEnd = onSpeechEnd;
  // Voice.onSpeechError = onSpeechError;
  Voice.onSpeechResults = onSpeechResults;
  Voice.onSpeechPartialResults = onSpeechPartialResults;
  // Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

  const startSpeechRecognizing = async () => {
    // setPitch('');
    // setError('');
    // setStarted('');
    // setResults([]);
    // setPartialResults([]);
    // setEnd('');
    try {
      await Voice.start('en-US', {});
    } catch (e) {
      console.log('error');
      console.error(e);
      console.log.warn('Something went wrong voice recording', e);
    }
  };
  const stopSpeechRecognizing = async () => {
    try {
      await Voice.stop();
      setStarted(null);
    } catch (e) {
      console.error(e);
    }
  };

  const Iconpress = () => {
    startSpeechRecognizing();
    setText(false);
    setIsClicked(true);
    setTimeout(() => {
      setText(true);
    }, 3000);
  };

  const onSearchtxt = txt => {
    let tempData = countries.filter(item =>
      item.name.toLowerCase().includes(txt?.toLowerCase()),
    );
    console.log('tempdata', tempData);

    SetData(tempData);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20, alignItems: 'center'}}>
      {/* {partialResults.map((result, index) => {
        return (
          <View>
            <Text key={`partial-result-${index}`} style={styles.resultBox}>
              {result}
            </Text>
          </View>
        );
      })} */}
      <Searchbar
        style={styles.searchBarStyle}
        value={searchBoxValue}
        icon={'microphone'}
        placeholder="Search"
        onIconPress={() => {
          Iconpress();
        }}
        onChangeText={txt => {
          onSearchtxt(txt);
          setSearchBoxValue(txt);
        }}
      />
      {/* {isclicked ? ( */}
      <Modal transparent={true} animationType={'slide'} visible={isclicked}>
        <View style={[styles.modalfirstView]}>
          <View style={[styles.modalSecondView]}>
            <IconButton
              size={20}
              onPress={() => {
                setIsClicked(!isclicked);
              }}
              iconColor="white"
              icon={'close'}
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                top: 10,
                right: 10,
              }}
            />

            <View style={[styles.dot, styles.center]}>
              {[...Array(count).keys()].map(index => {
                return (
                  <MotiView
                    from={{opacity: 0.5, scale: 1}}
                    animate={{opacity: 0, scale: 2.5}}
                    transition={{
                      type: 'timing',
                      duration: 1000,
                      easing: Easing.out(Easing.ease),
                      delay: index * 400,
                      loop: false,
                    }}
                    key={index}
                    style={[StyleSheet.absoluteFillObject, styles.dot]}
                  />
                );
              })}
              <Avatar.Icon
                size={40}
                icon={'microphone'}
                style={{backgroundColor: _color}}
              />
            </View>
            {/* <Text style={{color: 'black', fontSize: 15}}>Listening...</Text> */}
            {text ? <Texthide2 /> : <Texthide1 />}
            {text ? (
              <TouchableOpacity
                onPress={() => {
                  startSpeechRecognizing();

                  setCount(count + 5);

                  setText(false);

                  setTimeout(() => {
                    if (!searchBoxValue || searchBoxValue == '') {
                      setText(true);
                    } else console.log(searchBoxValue);
                  }, 3000);
                }}
                style={{
                  height: 21,
                  width: 70,
                  backgroundColor: _color,
                  borderRadius: 2,
                  marginTop: 10,
                }}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 12}}>
                  Try Again
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Modal>
      {/* ) : null} */}

      <View style={styles.listview}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{borderWidth: 0.5}}>
                <Text style={styles.itemstyle}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SpeechToText;

const styles = StyleSheet.create({
  messageBox: {},
  listview: {
    height: 550,
    width: '95%',
    // borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
  },
  itemstyle: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  searchBarStyle: {
    paddingLeft: 0,
    borderRadius: 25,
    width: '95%',
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  dot: {
    height: _size,
    width: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalfirstView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalSecondView: {
    // width: '85%',
    // height: 400,
    // backgroundColor: '#fff',

    // borderWidth: 0.5,
    // borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',

    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
    width: 350,
  },
});
