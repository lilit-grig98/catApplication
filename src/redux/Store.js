import { configureStore } from '@reduxjs/toolkit';
import catReducer from '../redux/CatSlices';

const store = configureStore({
  reducer: {
    cat: catReducer,
  },
});

export default store;
