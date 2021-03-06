import { createAction } from '@reduxjs/toolkit';

export const CHANGE_MONEY_AMOUNT_REQUESTED = createAction('CHANGE_MONEY_AMOUNT_REQUESTED');
export const CHANGE_MONEY_AMOUNT_REJECTED = createAction('CHANGE_MONEY_AMOUNT_REJECTED');

export const CHANGE_BITCOIN_AMOUNT_REQUESTED = createAction('CHANGE_BITCOIN_AMOUNT_REQUESTED');
export const CHANGE_BITCOIN_AMOUNT_REJECTED = createAction('CHANGE_BITCOIN_AMOUNT_REJECTED');

export const CHANGE_BITCOIN_PRICE_REQUESTED = createAction('CHANGE_BITCOIN_PRICE_REQUESTED');
export const CHANGE_BITCOIN_PRICE_REJECTED = createAction('CHANGE_BITCOIN_PRICE_REJECTED');

export const MODAL_OPEN_REQUESTED = createAction('MODAL_OPEN_REQUESTED');

export const AUTH_TYPE_REQUESTED = createAction('AUTH_TYPE_REQUESTED');

export const HISTORY_REQUESTED = createAction('HISTORY_REQUESTED');

export const USER_REG_REQUESTED = createAction('USER_REG_REQUESTED');
export const USER_REGISTERED = createAction('USER_REGISTERED');

export const USER_AUTH_REJECTED = createAction('USER_AUTH_REJECTED');

export const USER_LOGIN_REQUESTED = createAction('USER_LOGIN_REQUESTED');
export const USER_LOGGED_IN = createAction('USER_LOGGED_IN');

export const USER_LOGOUT_REQUESTED = createAction('USER_LOGOUT_REQUESTED');
export const USER_LOGGED_OUT = createAction('USER_LOGGED_OUT');

// export const CHANGE_THEME_REQUESTED = 'CHANGE_THEME_REQUESTED';
