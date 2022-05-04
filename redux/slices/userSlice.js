/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    token: '',
    authType: 'Login',
    id: null,
    errorMessage: '',
    error: false,
  },
  reducers: {
    userRegRequested(action) {
      api.post('/auth/registration', action.values);
    },
    userAuthRejected(state, action) {
      if (action.error && action.error.response) {
        state.error = true;
        state.errorMessage = action.error.response.data.message;
      } else state.error = action.payload.error;
    },
    userLoginRequested(state, action) {
      if (action.payload.error) {
        state.error = action.payload.error;
      }
    },
    userLoggedIn(state, action) {
      state.isLogin = true;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    userLogoutRequested(state) {
      state.isLogin = false;
      state.id = null;
      state.token = '';
    },
    userAuthTypeRequested(state, action) {
      state.authType = action.payload.authType;
    },
  },
});

export default userSlice;
export const {
  userRegRequested, userAuthRejected, userLoginRequested,
  userLogoutRequested, userLoggedIn, userAuthTypeRequested,
} = userSlice.actions;
