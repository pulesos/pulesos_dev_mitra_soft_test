import axios from "axios";
import { Dispatch } from "react";

export type PhotosType = {
    id: number
    title: string
    url: string
}

export type initialPhotosStoreType = {
    photos: PhotosType[] | undefined
    isFetching: boolean
}

let initialState: initialPhotosStoreType = {
    photos: undefined,
    isFetching: false
}

type actionType = setPhotosACType | setIsFetchingACType

const photosReducer = (state: initialPhotosStoreType  = initialState, action: actionType): initialPhotosStoreType => {
    switch (action.type) {
        case 'SET_PHOTOS':
            return {
                ...state,
                photos: action.data
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

export type setPhotosACType = {
    type: 'SET_PHOTOS'
    data: PhotosType[]
}

export const SET_PHOTOS = (data: PhotosType[]): setPhotosACType => {
    return {
        type: 'SET_PHOTOS',
        data
    }
}

export type setIsFetchingACType = {
    type: 'SET_IS_FETCHING'
    data: boolean
}

export const SET_IS_FETCHING = (data: boolean): setIsFetchingACType => {
    return {
        type: 'SET_IS_FETCHING',
        data
    }
}



export const getPhotosTC = () => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch(SET_IS_FETCHING(true))
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24')
            .then((res) => {
                dispatch(SET_PHOTOS(res.data))
                dispatch(SET_IS_FETCHING(false))
            })
    }

}

export default photosReducer