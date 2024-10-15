import './Header.scss'
import Nav from '../Nav/Nav'
const Header = () => {
    return (
        <header className="header" id="header">
            <Nav/>
            <div className="hero">
                <h1 className="hero__heading">Bark & Lens</h1>
                <p className="hero__subheading">Premium Dog Photography at Humber Bay</p>
            </div>
        </header>
    )
}
export default Header