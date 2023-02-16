import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';

import {useState, useRef, useCallback} from 'react';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ShakeTextInput from '../components/shakeTextInput';
import {color} from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();

const arr = [
  {title: 'Signup', id: 1},
  {title: 'Signin', id: 2},
];

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Signup" component={Signup} />
//       <Tab.Screen name="SignIn" component={Signin} />
//     </Tab.Navigator>
//   );
// }

const Home = () => {
  const [selected, setSelected] = useState(arr[0]);
  // const [passWord, setPassword] = useState();
  const [invalid, setInvalid] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const animE = useRef(new Animated.Value(0));
  const animP = useRef(new Animated.Value(0));
  const [border, setBorderColo] = useState(false);

  let rege =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const signIn = () => {
    if (!validateEmail(email)) {
      Alert.alert(email, 'Thers is wrong email');
    } else if (!validatePassword(password)) {
      Alert.alert('Password is too Short');
    }
  };

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,
      );
  };
  const validatePassword = password => {
    return password.length > 8;
  };

  // const onChangeSubmit = value => {
  //   console.log('value', value);
  //   if (value !== email && value !== password) {
  //     setTimeout(() => {
  //       setInvalid(false);
  //     }, 100);
  //   }
  // };
  const shakeEmail = useCallback(() => {
    // makes the sequence loop

    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(animE.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(animE.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(animE.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      {iterations: 2},
    ).start();
  });
  const shakePassword = useCallback(() => {
    // makes the sequence loop

    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(animP.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(animP.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(animP.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      {iterations: 2},
    ).start();
  });
  return (
    <View style={styles.main}>
      {/* <Image
        source={require('../screens/asset/imges/logo.png')}
        style={styles.imglogo}
      /> */}
      {/* <Signin />
      <View style={styles.tabStyle}>
        {arr.map(item => {
          const isSelected = item.id == selected.id;

          return (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={
                isSelected
                  ? {
                      borderBottomWidth: 4.0,
                      borderBottomColor: appColor.primry.color,
                      width: '40%',
                    }
                  : {
                      borderBottomWidth: 3.0,
                      borderBottomColor: 'white',
                      width: '40%',
                    }
              }>
              <View>
                <Text style={[{fontSize: 18, alignSelf: 'center'}]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View> */}
      {/* {selected.id == 1 ? <Signup /> : <Signin />} */}

      {/* <View
        style={{
          height: 80,
          width: 350,
          borderColor: 'blue',
          borderRadius: 20,
          marginTop: 150,
          position: 'absolute',
          borderWidth: 2.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 75,
            width: 100,
            backgroundColor: 'blue',
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderWidth: 1.5,
            borderColor: 'blue',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            Hi Doctor
          </Text>
        </View>
        <View style={{justifyContent: 'backs'}}>
          <Icon name="exclamation" />
        </View>
      </View> */}
      <Animated.View
        style={{
          transform: [{translateX: animE.current}],
        }}>
        <ShakeTextInput
          ref={animE}
          placeholder="Email"
          style={
            invalid
              ? {
                  borderColor: 'red',
                  backgroundColor: 'white',
                  borderWidth: 1.5,
                }
              : {borderColor: 'red', backgroundColor: 'pink'}
          }
          // onChangeText={email => {
          //   // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          //   // console.log('email', email);

          //   if (rege.test(email)) {
          //     console.log('test');
          //   } else {
          //     shakeEmail();
          //     setInvalid(true);
          //   }
          // }}
          onSubmitEditing={email => {
            if (!validateEmail(email)) {
              console.log(email, 'bbyby');
              // Alert.alert(email, 'Thers is wrong email');
              shakeEmail();
              setInvalid(true);
              console.log('bhnd');
            } else {
              console.log('bhnd1');
              setInvalid(false);
            }
          }}
          // console.log(email);
          // if (!validateEmail(email)) {
          //   console.log(email, 'bbyby');
          //   // Alert.alert(email, 'Thers is wrong email');
          //   shakeEmail();
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{translateX: animP.current}],
        }}>
        <ShakeTextInput
          ref={animP}
          placeholder="Password"
          secureTextentry={true}
          style={
            invalidPassword
              ? {
                  borderColor: 'red',
                  backgroundColor: 'white',
                  borderWidth: 1.5,
                }
              : {
                  borderColor: 'red',
                  backgroundColor: 'pink',
                }
          }
          // onChangeText={email => {
          //   // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          //   // console.log('email', email);

          //   if (rege.test(email)) {
          //     console.log('test');
          //   } else {
          //     shakeEmail();
          //     setInvalid(true);
          //   }
          // }}
          onSubmitEditing={password => {
            if (!validatePassword(password)) {
              console.log(email, 'bbyby');
              // Alert.alert(email, 'Thers is wrong email');
              shakePassword();
              setInvalidPassword(true);
              console.log('bhnd');
            } else {
              console.log('bhnd1');
              setInvalidPassword(false);
            }
          }}
        />
      </Animated.View>
      <TouchableOpacity
        style={[styles.inputView, styles.btn]}
        onPress={() => {
          signIn();
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  imglogo: {
    height: 80,
    with: 100,
    resizeMode: 'contain',
    marginTop: 5,
  },
  tabStyle: {},
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '100%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
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
});
