import {useNavigate, useLocation} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function DashFooter(){
    const navigate = useNavigate()
    const { pathname } = useLocation()

    let goHomeButton = null;

    const onGoHomeButton = () => {
        navigate('/dash')
    }
    if (pathname !== '/dash'){
        goHomeButton = (
            <button title='Home' onClick={onGoHomeButton} className = 'dash-footer__button icon-button'>
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }
    
    return (
        <footer className='dash-footer'>
            {goHomeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    )
}