import {combineReducers} from "redux";

export const rootReducer = combineReducers({   
     // !!!!! не забути прописати потім редьюсери...
})

export type RootState = ReturnType<typeof rootReducer>