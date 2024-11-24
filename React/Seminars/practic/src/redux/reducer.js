import { TOGGLE_THEME } from "./actions";

const initialState = {
    theme: "light", // Начальная тема
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        default:
            return state;
    }
};

export default themeReducer;
