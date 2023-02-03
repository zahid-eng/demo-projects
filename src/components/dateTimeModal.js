import React, {isValidElement, useState} from 'react';
import {
  Button,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {windowHeight} from './customtab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const DateTimeModal = () => {
  //
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = event => {
    console.warn('A date has been picked: ', event);
    console.log('asdasd', date);
    setDate(event);
    hideDatePicker();
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          borderRadius: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          borderWidth: 1.0,
          borderColor: 'green',
        }}>
        {/* <TextInput
          style={{width: '90%', borderRadius: 20}}
          value={date}
          onChange={() => handleConfirm()}
        /> */}
        <Text style={{color: 'red', marginLeft: 10, padding: 10}}>
          {moment(date).format('D/MM/YYYY')}
        </Text>
        {/* <Text>{date}</Text> */}
        <TouchableOpacity onPress={showDatePicker} style={{marginRight: 5}}>
          <Icon name="calendar" size={30} color="green" />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DateTimeModal;

const styles = StyleSheet.create({
  dateTimebtn: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  title: {
    color: 'white',
    fontWeight: '800',
  },
});
