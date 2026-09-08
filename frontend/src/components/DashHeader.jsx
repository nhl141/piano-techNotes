import { Link } from 'react-router'

export default function DashHeader(){
    return (

        <header className='dash-header'>
            <div className='dash-header__container'>
                <Link to="/dash">
                    <h1>techNotes</h1>
                </Link>
                <nav className='dash-header__nav'>

                </nav>
            </div>
        </header>
    )
}