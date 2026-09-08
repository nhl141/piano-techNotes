import {Link} from 'react-router'

export default function Public(){
    return(
        <section className='public'>
            <header>
                <h1>Welcome to <span lassName="nowrap">Piano Repairs</span></h1>
            </header>
            <main className='public__main'>
                <p>

                </p>
                <address className='public__address'>
                    Piano Repairs<br />
                    123 Piano St.<br />
                    Piano City, ON 12345<br />
                    <a href="tel:+1">(123) 456-7890</a>
                </address>
                <br />
                <p>Owner: Lucas Lee</p>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    )
}