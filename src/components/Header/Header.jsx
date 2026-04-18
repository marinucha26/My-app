import magicImg from "../../assets/images/magic.png";
import "./style.scss";

function Header() {
    return (
        <header className="header-floor">
            <h1 className="header-title">🪄 
                <img src={magicImg} alt="" className="header-image" />
                 Книжный шторм</h1>
            <p>Следите за своим читательским прогрессом</p>
        </header>
    );
}

export default Header;
