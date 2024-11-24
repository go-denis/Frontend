import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import themeReducer from "./reducer";
import productsReducer from "./productsSlice";
import tasksReducer from "./tasksSlice"; // Новый редьюсер задач

// Настройка persist
const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    theme: themeReducer,
    products: productsReducer,
    tasks: tasksReducer, // Добавляем редьюсер задач
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default store;
