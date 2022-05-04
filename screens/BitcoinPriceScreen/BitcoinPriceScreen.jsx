import React, { memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const BitcoinPriceScreen = () => {
  return (
    <View>
      <Button title="Increase Bitcoin Price" />
      <Button title="Decrease Bitcoin Price" />
    </View>
  );
};

export default memo(BitcoinPriceScreen);
