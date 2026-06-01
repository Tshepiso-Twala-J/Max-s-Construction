function Header() {
    return ( //pure html
        <header className="header">
            <h1 className="header_title">Max's Construction</h1>
            <nav className="header_nav">
                <ul className="header_nav-list">
                    <li className="header_nav-item"><a href="#home" className="header_nav-link">Home</a></li>
                    <li className="header_nav-item"><a href="#services" className="header_nav-link">Services</a></li>
                    <li className="header_nav-item"><a href="#projects" className="header_nav-link">Projects</a></li>
                    <li className="header_nav-item"><a href="#contact" className="header_nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header