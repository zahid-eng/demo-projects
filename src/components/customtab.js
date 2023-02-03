import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const arr = [
  {
    title: 'Sign In',
    id: 1,
  },
  {
    title: 'Sign up',
    id: 2,
  },
];

export const appColor = {
  primry: {
    color: 'orange',
    backgroundColor: 'blue',
  },
};

const Customtab = () => {
  const [selected, setSelected] = useState(arr[0]);
  return (
    <View style={styles.tabstyle}>
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
                    width: '20%',
                  }
                : {
                    borderBottomWidth: 3.0,
                    borderBottomColor: 'white',
                    width: '20%',
                  }
            }>
            <Text
              style={[
                isSelected
                  ? {
                      fontWeight: '800',
                      color: appColor.primry.backgroundColor,
                    }
                  : null,
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Customtab;

const styles = StyleSheet.create({
  tabstyle: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    height: 40,
  },
  titlestyle: {textAlign: 'justify', fontWeight: '600'},
});
