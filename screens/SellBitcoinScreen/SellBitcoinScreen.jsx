import React, { memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const SellBitcoinScreen = () => {
  return (
    <View>
      <Button title="Sell Bitcoin" />
    </View>
  );
};

export default memo(SellBitcoinScreen);
