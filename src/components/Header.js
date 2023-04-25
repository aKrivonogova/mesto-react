import logoSvg from '../images/Vector.svg'
function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoSvg} alt="Логорип сайта" />
        </header>
    );
}

export default Header; 
