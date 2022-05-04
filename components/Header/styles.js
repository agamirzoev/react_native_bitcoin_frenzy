import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    width: '100%',
    height: 100,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
    height: 60,
    flex: 0,
  },
  logoAndAppName: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 160,
  },
  app: {
    paddingHorizontal: 0,
    flex: 0,
  },
  appName: {
    width: 150,
    paddingHorizontal: 5,
    fontSize: 15,
  },
  headerToolbar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    flex: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginTop: 5,
  },
  btcExchangeRate: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 11,
    color: '#fff',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  wallet: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginLeft: 10,
    marginRight: 20,
    flex: 2.5,
  },
  walletAmount: {
    color: '#fff',
    paddingHorizontal: 0,
    marginHorizontal: 0,
    width: 60,
  },
  bitcoinAmount: {
    color: '#fff',
    paddingHorizontal: 0,
    marginHorizontal: 0,
    width: 100,
  },
  menu: {
    flex: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 8,
  },
});

export default styles;
