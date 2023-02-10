import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
  Animated,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomSheet} from 'react-native-btr';
import {add} from 'react-native-reanimated';
import {date} from 'yup/lib/locale';

const ItemAnimated = () => {
  const arr = [
    {
      title: 'Zahid',
      id: 1,
    },
    {
      title: 'Ali',
      id: 2,
    },
  ];
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();
  const [dataList, setDataList] = useState(arr);

  const maxvalue = dataList.map(item => {
    return item['id'];
  });

  const handleClick = () => {
    let id = Math.max(...maxvalue) + 1;
    console.log(id);
    let obj = {id, title: data};
    setVisible(false);
    setNewItem(obj)
    setTimeout(() => {
        opacity.setValue(0)
        setDataList([...dataList, obj]);

      console.log(obj);
    }, 500);
  };

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      console.log('hi');
      opacity.setValue(1);
    });
  }, [dataList]);

  const [newItem,setNewItem] = useState();
  
  

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={dataList}
        keyExtractor={key => {
          return key.id;
        }}
        renderItem={({item}) => {
            let style = {

            };
            if(item.id === newItem?.id)
            style = {
                opacity,
                transform: [
                  {
                    scale: opacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.2, 1],
                    }),
                  },
                ],
            }
          return (
            //   <Text
            //     style={{
            //       marginTop: 20,
            //       alignSelf: 'center',
            //       fontSize: 18,
            //       fontWeight: '600',
            //       backgroundColor:'blue',
            //       opacity:0.3,
            //       width:'50%',
            //       borderRadius:10,
            //       height:50,
            //       textAlign:'center',
            //       paddingTop:10
            //     }}>
            //     {item.title}
            //   </Text>
          
            <Animated.View
              style={style}>
              <Text
                style={{
                  marginTop: 20,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                  backgroundColor: 'blue',
                  opacity: 0.3,
                  width: '50%',
                  borderRadius: 10,
                  height: 50,
                  textAlign: 'center',
                  paddingTop: 10,
                }}>
                {item.title}
              </Text>
            </Animated.View>
          );
        }}
      />
      <TouchableOpacity style={styles.add} onPress={toggleBottomNavigationView}>
        <Icon name="plus" size={30} color="#01a699" />
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
      >
        {/*Bottom Sheet inner View*/}
        <View style={styles.bottomNavigationView}>
          <Text style={styles.Textbottom}>Add Item</Text>
          <TextInput
            style={styles.bottomInput}
            s
            placeholder="Add Item"
            onChangeText={text => setData(text)}
          />
          <TouchableOpacity
            style={styles.addItembtn}
            onPress={() => handleClick()}>
            <Text style={styles.Textbottom}>Add Something</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ItemAnimated;

const styles = StyleSheet.create({
  add: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    alignItems: 'center',
  },
  bottomInput: {
    height: 50,
    width: '80%',

    borderWidth: 2.0,
    borderColor: '#2596be',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  Textbottom: {
    fontSize: 20,
    fontWeight: '500',
  },
  addItembtn: {
    height: 50,
    width: '80%',
    backgroundColor: '#2596be',

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
