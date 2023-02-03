import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useState, useRef} from 'react';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './signup';
import Signin from './signin';
import CustomInput from '../components/customInput';
import Customtab, {appColor, windowHeight} from '../components/customtab';

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
  return (
    <View style={styles.main}>
      <Image
        source={require('../screens/asset/imges/logo.png')}
        style={styles.imglogo}
      />
      {/* <Signin /> */}
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
      </View>
      {/* {selected.id == 1 ? <Signup /> : <Signin />} */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,

    alignItems: 'center',
  },
  imglogo: {
    height: 80,
    with: 100,
    resizeMode: 'contain',
    marginTop: 40,
  },
  tabStyle: {},
});
