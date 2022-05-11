import {Row} from 'react-bootstrap'
import { PhotosType } from '../../redux/photosReducer'
import Photo from './Photo'

type PropsType = {
    photos: PhotosType[] | undefined
}

const Photos: React.FC<PropsType> = ({photos}) => {
    let photosElements = 
        photos?.map(photo => 
            <Photo key={photo.id} photo={photo}/>)
    
    return (
        <>
            <Row>
                {photosElements}
            </Row>    
        </>
    )
}

export default Photos;