import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomInput from '../components/customInput';
import {appColor} from '../components/customtab';
import DateTimeModal from '../components/dateTimeModal';
import {Formik} from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object().shape({
  FirstName: yup.string().required('Enter Your FirstName'),
  lastName: yup.string().required('Enter Last Name'),
  passWord: yup.string().required('Enter a Password'),
  confirmPassword: yup.string().required('Enter Confirm Password'),
});

const Signup = () => {
  const handleSubmit = values => {
    console.log(values, 'printing');
  };

  return (
    <Formik
      validationSchema={signupSchema}
      initialValues={{
        FirstName: '',
        lastName: '',
        passWord: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}>
      {({handleChange, handleSubmit, handleBlur, values, errors}) => (
        <View style={styles.signup}>
          <>
            <CustomInput
              placeholder="First Name"
              icon="account"
              value={values.FirstName}
              error={errors.FirstName}
              onTextChanged={handleChange('FirstName')}
            />
            <CustomInput
              placeholder="Last Name"
              error={errors.lastName}
              icon="account-outline"
              value={values.lastName}
              onTextChanged={handleChange('lastName')}
            />
            <CustomInput
              placeholder="Password"
              error={errors.passWord}
              icon="lock"
              secureTextentry={true}
              value={values.passWord}
              onTextChanged={handleChange('passWord')}
            />
            <CustomInput
              placeholder="Confirm Password"
              error={errors.confirmPassword}
              icon="lock"
              value={values.confirmPassword}
              secureTextentry={true}
              onTextChanged={handleChange('confirmPassword')}
            />
            {/* <TextInput
          placeholder="FirstName"
          style={styles.input}
          placeholderTextColor="black"
        />

        <TextInput
          placeholder="LastName"
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          placeholderTextColor="black"
        /> */}
            {/* 
        <DateTimeModal /> */}
          </>
          <TouchableOpacity style={styles.signupbtn} onPress={handleSubmit}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signup: {
    width: '100%',
  },
  input: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 2.5,
    opacity: 0.3,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  signupbtn: {
    width: '95%',
    backgroundColor: appColor.primry.color,
    opacity: 0.9,
    height: 60,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
});
