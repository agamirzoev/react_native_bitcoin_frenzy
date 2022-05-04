/* eslint-disable max-len */
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Logout from '../../Logout';

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: 'row',
  },
  buttons: {
    fontSize: 13,
    marginHorizontal: 0,
    marginVertical: 0,
    height: 20,
    color: '#fff',
    textTransform: 'none',
  },
  buttonsView: {
    flexDirection: 'row',
  },
});

const AuthBar = () => {
  const isLogin = false;
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };
  return (
    <View style={styles.loginButton}>
      {isLogin
        ? <Logout />
        : (
          <View style={styles.buttonsView}>
            <Button
              labelStyle={styles.buttons}
              onPress={handleButtonPress}
            >
              Login
            </Button>
            <Button
              style={styles.buttons}
              labelStyle={styles.buttons}
              onPress={handleButtonPress}
            >
              Sign up
            </Button>
          </View>
        )}
    </View>
  );
};

export default memo(AuthBar);
