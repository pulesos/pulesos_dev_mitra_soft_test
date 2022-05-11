import { connect } from "react-redux";
import {Container, Row, Col, Nav, Accordion} from "react-bootstrap"
import {Link} from 'react-router-dom'
import { appStateType } from "../../redux/redux-store"
import Preloader from '../Preloader/Preloader'
//@ts-ignore
import Avatar from "../../assets/images/avatar.jpg"

type PropsType = {
    isFetching: boolean
}

const AboutMe: React.FC<PropsType> = ({isFetching}) => {
    return (
        <>
            {isFetching ? <Preloader/> : 
                <Container className="mt-2">
                    <Row>
                        <Col style={{maxWidth: '400px'}}>
                            <img className="w-100" style={{borderRadius: '12px'}} src={Avatar} alt="avatar"/>
                        </Col>
                        <Col className="justify-content-start">
                            <h1>Ключников Евгений Евгеньевич</h1>
                            <p>Телефон: <a className="text-decoration-none" href="tel:89539512481">89539512481</a></p>
                            <p>Email: <a className="text-decoration-none" href="evgen7661@gmail.com">evgen7661@gmail.com</a></p>
                            <p>GitHub профиль: <a className="text-decoration-none" href="https://github.com/pulesos">CLICK</a></p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Немного о себе</Accordion.Header>
                                    <Accordion.Body>
                                    <p>Доброго времени суток! В последние годы работал в туризме. Высокоорганизованный и стрессоустойчивый человек, тщательно и ответственно подходящий к работе. Человек, адекватно воспринимающий информацию и прекрасно анализирующий ситуацию.Всесторонне развит, люблю читать, всегда стремлюсь постичь что-то новое. По мнению других людей, обладаю широким кругозором. Целиком и полностью готов к обучению и к постижению новых технологий!</p>
                                    <p>Мой стек:</p>
                                    <ul>
                                        <li>HTML, CSS, Javascript, Typescript</li>
                                        <li>Владение Flexbox, Grid Layout</li>
                                        <li>Знание БЭМ</li>
                                        <li>Webpack, Gulp, NPM</li>
                                        <li>JavaScript (ES6, JQuery)</li>
                                        <li>React (Redux, React-Router, Axios)</li>
                                        <li>Git</li>
                                        <li>Zeplin, Figma, Adobe Photoshop</li>
                                        <li>Babel</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
                            <Nav.Link><Link to='/'>Назад</Link></Nav.Link>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
};

const mapStateToProps = (state: appStateType) =>{
    return{
        isFetching: state.fullImage.isFetching,
    }
}

export default connect(mapStateToProps, {})(AboutMe)