import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default is localStorage
import todoReducer from '../features/todos/TodoSlice';
import { combineReducers } from 'redux';

// Настраиваем persist
const persistConfig = {
  key: 'root',
  storage,
};

// Комбинируем редьюсеры
const rootReducer = combineReducers({
  todos: todoReducer,
});

// Оборачиваем rootReducer в persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Настраиваем хранилище с использованием persistedReducer
const store = configureStore({
  reducer: persistedReducer,
});

// Создаем persistor
export const persistor = persistStore(store);
export default store;
