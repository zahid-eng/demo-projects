import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/customInput';
import {appColor, windowHeight, windowWidth} from '../components/customtab';

import {Formik} from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required('Enter Valid Email'),
  password: yup.string().required('Please Enter Your Password'),
});

const Signin = () => {
  const handleSubmit = values => {
    console.log(values, 'printing');
  };
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View style={styles.signup}>
          <CustomInput
            placeholder="Enter Email"
            icon="account"
            error={errors.email}
            value={values.email}
            onTextChanged={handleChange('email')}
          />

          <CustomInput
            placeholder="Password"
            secureTextentry={true}
            error={errors.password}
            icon="lock"
            value={values.password}
            onTextChanged={handleChange('password')}
          />

          <TouchableOpacity style={styles.signinbtn} onPress={handleSubmit}>
            <Text style={styles.signinText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Signin;

const styles = StyleSheet.create({
  signup: {
    width: '95%',
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
  signinbtn: {
    width: windowWidth / 1.1,
    backgroundColor: appColor.primry.color,
    opacity: 0.9,
    height: (windowHeight * 0.2) / 2.5,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  signinText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
