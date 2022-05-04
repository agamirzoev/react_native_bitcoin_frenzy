import React, { memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const BuyBitcoinScreen = () => {
  return (
    <View>
      <Button title="Buy Bitcoin" />
    </View>
  );
};

export default memo(BuyBitcoinScreen);
