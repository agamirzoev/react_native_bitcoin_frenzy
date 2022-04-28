import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles.js';

const Header = () => {
  return (
    <View className={styles.logo}>
      <View className="header__header-wrap header-wrap">
        <View sx={{ display: 'flex' }}>
          <Image className={styles.logo} source={logo} alt="logo" />
          <Text className="header-wrap__app-name app-name" component="div">
            BITCOIN FRENZY
          </Text>
        </View>
        <View className="header-wrap__header-toolbar header-toolbar">
          <Text className="header-toolbar__btc-price btc-price" component="div">
            1 Bitcoin = 1234 $
          </Text>
          <View className="header-toolbar__wallet-amount wallet-amount">
            <Text className="wallet-amount__box" component="div">
              1000 $
            </Text>
            <Text className="wallet-amount__box" component="div">
              10 BITCOINS
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
