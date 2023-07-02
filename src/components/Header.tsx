import logo from '../images/logo.png';
import {Link} from "react-router-dom";

function Header() {
    return (<>
        <div className="header d-flex align-items-center">
            <div className="container d-flex align-items-center">
                <Link to="/"><img src={logo} alt="Logo" style={{width: '46px'}}/></Link>
                <span className="app-title ms-2">GitHub Users</span>
            </div>
        </div>
    </>);
}

export default Header;