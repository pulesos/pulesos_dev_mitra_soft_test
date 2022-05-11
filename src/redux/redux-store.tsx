import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import fullImageReducer, { initialFullImageStateType } from "./fullImageReducer"
import photosReducer, { initialPhotosStoreType } from "./photosReducer"

export type appStateType = {
    photos: initialPhotosStoreType
    fullImage: initialFullImageStateType
}

let reducers = combineReducers({
    photos: photosReducer,
    fullImage: fullImageReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store