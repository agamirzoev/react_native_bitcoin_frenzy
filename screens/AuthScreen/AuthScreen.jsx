import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import { Formik } from 'formik';

import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { userRegRequested } from '../../redux/slices/userSlice';

const styles = StyleSheet.create({
  form: {
    marginTop: 120,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  submitButton: {
    width: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
});

const AuthScreen = () => {
  const isRegistration = 'Registration';

  const dispatch = useDispatch();

  const validationSchema = yup.object({
    login: isRegistration
      ? yup
        .string('Enter your login')
        .min(2, 'Login should be of minimum 2 characters length')
        .required('Login is required')
      : '',
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        login: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        dispatch((userRegRequested)({ values }));
      }}
    >
      {({
        handleChange, handleBlur, handleSubmit, values, errors,
      }) => (
        <View style={styles.form}>
          <Text style={styles.header}> Registration </Text>
          <TextInput
            mode="outlined"
            onChangeText={handleChange('login')}
            onBlur={handleBlur('login')}
            value={values.login}
            label="Login"
          />
          {errors.login
         && <Text style={{ fontSize: 10, color: 'red' }}>{errors.login}</Text>}
          <TextInput
            mode="outlined"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            label="Email"
            keyboardType="email-address"
          />
          {errors.email
         && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
          <TextInput
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            mode="outlined"
            label="Password"
          />
          {errors.password
         && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>}
          <Button onPress={handleSubmit} style={styles.submitButton}> Submit </Button>
        </View>
      )}
    </Formik>
  );
};

export default memo(AuthScreen);
