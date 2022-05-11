import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import { getPhotosTC, PhotosType } from "../../redux/photosReducer"
import { appStateType } from "../../redux/redux-store"
import Preloader from "../Preloader/Preloader"
import Photos from "./Photos"

type PropsType = {
    photos: PhotosType[] | undefined
    isFetching: boolean
    getPhotosTC: () => void
}

const PhotosContainer: React.FC<PropsType> = ({photos, isFetching, getPhotosTC}) => {

    useEffect(() => {
        getPhotosTC()
    }, [])
    return (
        <>
            {isFetching ? <Preloader/> :
                <Container>
                    <Photos photos={photos}/>
                </Container>
            }
        </>
    )
}

const mapStateToProps = (state: appStateType) => {
    return {
        photos: state.photos.photos,
        isFetching: state.photos.isFetching,
    }
}

export default connect(mapStateToProps, {getPhotosTC})(PhotosContainer)