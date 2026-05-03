function Header() {
    return ( //pure html
        <header className="header">
            <h1 className="header__title">Max's Construction</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="#home" className="header__nav-link">Home</a></li>
                    <li className="header__nav-item"><a href="#services" className="header__nav-link">Services</a></li>
                    <li className="header__nav-item"><a href="#projects" className="header__nav-link">Projects</a></li>
                    <li className="header__nav-item"><a href="#contact" className="header__nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header