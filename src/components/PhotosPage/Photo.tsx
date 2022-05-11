import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { PhotosType } from '../../redux/photosReducer'

type PropsType = {
    photo: PhotosType
}

const Photos: React.FC<PropsType> = ({photo}) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='m-2'>
                <Card.Img variant="top" src={photo.url} />
                <Card.Body>
                    <Card.Title>{photo.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to={`/photo/${photo.id}`}>
                        <Button variant="primary">Подробнее</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Photos;