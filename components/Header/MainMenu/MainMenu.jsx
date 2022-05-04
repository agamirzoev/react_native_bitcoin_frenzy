import React, { memo, useState } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons as MenuIcon } from '@expo/vector-icons';
import {
  Button, Menu, Divider, Provider,
} from 'react-native-paper';

const MainMenu = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View
        style={{
          width: 24,
          flexDirection: 'row',
          justifyContent: 'center',
          color: '#fff',
          flex: 0,
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={(
            <Button onPress={openMenu}>
              <MenuIcon name="menu" size={24} color="#fff" style={{ marginHorizontal: 0, marginVertical: 0 }} />
            </Button>
          )}
        >
          <Menu.Item onPress={() => {}} titleStyle={{ color: 'black' }} title="Wallet" />
          <Menu.Item onPress={() => {}} titleStyle={{ color: 'black' }} title="Buy Bitcoin" />
          <Menu.Item onPress={() => {}} titleStyle={{ color: 'black' }} title="Sell Bitcoin" />
          <Menu.Item onPress={() => {}} titleStyle={{ color: 'black' }} title="Bitcoin Price" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Logout" />
        </Menu>
      </View>
    </Provider>
  );
};

export default memo(MainMenu);
