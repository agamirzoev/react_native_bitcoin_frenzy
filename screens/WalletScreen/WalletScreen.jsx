import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonsLabel: {
    color: 'white',
    backgroundColor: 'black',
    width: '55%',
    height: 40,
    marginHorizontal: 0,
    textAlignVertical: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

const WalletScreen = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };
  return (
    <View style={styles.view}>
      <Button
        labelStyle={styles.buttonsLabel}
        contentStyle={styles.buttons}
        onPress={handlePress}
      >
        Deposit
      </Button>
      <Button
        labelStyle={styles.buttonsLabel}
        contentStyle={styles.buttons}
        onPress={handlePress}
      >
        Withdrawal
      </Button>
    </View>
  );
};

export default memo(WalletScreen);
