import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { getFullImageTC } from "../../redux/fullImageReducer"
import { PhotosType } from "../../redux/photosReducer"
import { appStateType } from "../../redux/redux-store"
import Preloader from "../Preloader/Preloader"
import FullImage from "./FullImage"

type PropsType = {
    fullImage: PhotosType | undefined
    isFetching: boolean
    getFullImageTC: (id: string) => void
}

const FullImageContainer: React.FC<PropsType> = ({fullImage, isFetching, getFullImageTC}) => {

    const {id} = useParams()

    useEffect(() => {
        if (id) {
            getFullImageTC(id)
        }
    }, [])

    return (
        <>
            {isFetching ? <Preloader/> :
                <Container>
                    <FullImage fullImage={fullImage}/>
                </Container>
            }
        </>

    )
}

const mapStateToProps = (state: appStateType) => {
    return {
        fullImage: state.fullImage.fullImage,
        isFetching: state.fullImage.isFetching,
    }
}

export default connect(mapStateToProps, {getFullImageTC})(FullImageContainer)