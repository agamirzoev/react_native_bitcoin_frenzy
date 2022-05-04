import React, { memo } from 'react';
import { Button } from 'react-native-paper';

const Logout = () => {
  return (
    <Button color="#fff" title="Logout" onPress={console.log('logout pressed')} />
  );
};

export default memo(Logout);
