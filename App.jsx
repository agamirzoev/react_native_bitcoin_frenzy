/* eslint-disable react/no-unstable-nested-components */
import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import store from './redux/store';

import Header from './components/Header';
import WalletScreen from './screens/WalletScreen';
import BuyBitcoinScreen from './screens/BuyBitcoinScreen';
import SellBitcoinScreen from './screens/SellBitcoinScreen';
import BitcoinPriceScreen from './screens/BitcoinPriceScreen';
import AuthScreen from './screens/AuthScreen';

const App = () => {
  const Stack = createStackNavigator();
  const isLogin = false;
  const initialRoute = isLogin ? 'Wallet' : 'Auth';
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            header: () => <Header />,
          }}
        >
          {isLogin
            ? (
              <>
                <Stack.Screen name="Wallet" component={WalletScreen} />
                <Stack.Screen name="Buy Bitcoin" component={BuyBitcoinScreen} />
                <Stack.Screen name="Sell Bitcoin" component={SellBitcoinScreen} />
                <Stack.Screen name="Bitcoin Price" component={BitcoinPriceScreen} />
              </>
            )
            : <Stack.Screen name="Auth" component={AuthScreen} />}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default memo(App);
