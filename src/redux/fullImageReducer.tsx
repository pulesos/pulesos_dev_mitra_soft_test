import axios from "axios";
import { Dispatch } from "react";
import { PhotosType, setIsFetchingACType } from "./photosReducer";

export type initialFullImageStateType = {
    fullImage: PhotosType | undefined
    isFetching: boolean
}

let initialState: initialFullImageStateType = {
    fullImage: undefined,
    isFetching: false
}

type actionType = setFullImageACType | setIsFetchingACType

const fullImageReducer = (state: initialFullImageStateType = initialState, action: actionType): initialFullImageStateType => {
    switch (action.type) {
        case 'SET_FULL_IMAGE':
            return {
                ...state,
                fullImage: action.data
            }
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.data
            }
        default:
            return state
    }
}

export type setFullImageACType = {
    type: 'SET_FULL_IMAGE'
    data: PhotosType
}

export const SET_FULL_IMAGE = (data: PhotosType): setFullImageACType => {
    return {
        type: 'SET_FULL_IMAGE',
        data
    }
}

export const SET_IS_FETCHING = (data: boolean): setIsFetchingACType => {
    return {
        type: 'SET_IS_FETCHING',
        data
    }
}

export const getFullImageTC = (id: string) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(SET_IS_FETCHING(true))
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((res) => {
                dispatch(SET_FULL_IMAGE(res.data))
                dispatch(SET_IS_FETCHING(false))
            })
    }
}

export default fullImageReducer