//@ts-ignore
import preloader from '../../assets/images/preloader.svg'
import './Preloader.css'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} className='preloader'/>
        </div>
    )
}

export default Preloader