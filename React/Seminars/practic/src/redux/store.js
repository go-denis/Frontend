import { createStore, combineReducers } from "redux";
import themeReducer from "./reducer";
import productsReducer from "./productsSlice"; // Новый редьюсер для продуктов

// Комбинирование редьюсеров
const rootReducer = combineReducers({
    theme: themeReducer,
    products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
