import { configureStore } from '@reduxjs/toolkit';
import authReducer from './pages/redux/slices/authSlice'
import counterReducer from './pages/redux/slices/counterSlice';
import postsReducer from './pages/redux/slices/postsSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authReducer,
        posts: postsReducer,
    },
});