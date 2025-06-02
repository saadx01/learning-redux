import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: true,userName:"" },
  reducers: {
    signin: (state) => { state.value = true; },
    logout: (state) => { state.value = false; },
  }
});

export const { signin, logout} = authSlice.actions;
export default authSlice.reducer;