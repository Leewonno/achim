import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import { signinSlice } from "../reducer/singin";

const reducers = combineReducers({
    signin: signinSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['signin'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
    // reducer: {
    //   counter:counterReducer,
    //   signin:signinReducer,
    // },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;