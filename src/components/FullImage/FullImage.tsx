import {Card, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PhotosType } from '../../redux/photosReducer'

type PropsType = {
    fullImage: PhotosType | undefined
}

const FullImage: React.FC<PropsType> = ({fullImage}) => {

    return (
        <>
            <Card style={{width: '28rem', margin: '15px auto'}}>
                <Card.Text>
                    Название: <strong>{fullImage?.title}</strong>
                    <br/>
                    ID: <strong>{fullImage?.id}</strong>
                </Card.Text>
                <Card.Img src={fullImage?.url}/>
                <Nav.Link><Link to='/'>Назад</Link></Nav.Link>
            </Card>
        </>
        
    )
} 

export default FullImage