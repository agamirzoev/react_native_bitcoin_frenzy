import React, { memo } from 'react';
import { Image, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

import { MaterialIcons as HistoryIcon } from '@expo/vector-icons';

import AuthBar from './AuthBar';
import MainMenu from './MainMenu';

import logo from '../../assets/logo.png';
import styles from './styles';

const Header = () => {
  const isLogin = true;
  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.headerWrapper}>
        {isLogin
          ? (
            <View style={styles.menu}>
              <MainMenu />
            </View>
          )
          : null}
        <View style={styles.logoAndAppName}>
          <Image style={styles.logo} source={logo} alt="logo" />
          <Appbar.Content title="BITCOIN FRENZY" style={styles.app} titleStyle={styles.appName} />
        </View>
        <HistoryIcon name="history" size={24} color="#fff" />
      </View>
      {isLogin
        ? (
          <View style={styles.headerToolbar}>
            <>
              <Appbar.Content titleStyle={styles.btcExchangeRate} title="1 Bitcoin = 1234 $" />
              <View style={styles.wallet}>
                <Text style={{ color: '#fff' }}> Wallet: </Text>
                <Appbar.Content titleStyle={styles.walletAmount} title="1000 $" style={{ flex: 0, paddingHorizontal: 6 }} />
                <Appbar.Content titleStyle={styles.bitcoinAmount} title="10 BITCOINS" style={{ flex: 0, paddingHorizontal: 6 }} />
              </View>
            </>
          </View>
        )
        : (
          <AuthBar />
        )}
    </Appbar.Header>
  );
};

export default memo(Header);
