import { faGripHorizontal, faSignOutAlt, faHeart, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './_sidebar.scss';

const Sidebar = () => {
    return (
        <div className="container-fluid sidebar d-flex flex-column justify-content-between px-4 py-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/">
                        <img src="https://shopkpr.s3.ap-south-1.amazonaws.com/Website%20images/shopkpr-personal/logo/logo_1.svg" alt="" />
                    </Link>
                </li>
                <li class="admin">
                    <Link to="/">
                        <div className="admin-icon rounded">
                            <span className="me-2"><FontAwesomeIcon icon={faGripHorizontal} /></span> <span>Admin</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="side-button">
                        <Link to="/">
                            <span className="me-2"><FontAwesomeIcon icon={faHeart} /> </span><span>Products</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="side-button">
                        <Link to="/">
                            <span className="me-2"><FontAwesomeIcon icon={faCog} /> </span><span>Settings</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="side-button">
                        <Link to="/">
                            <span className="me-2"><FontAwesomeIcon icon={faQuestionCircle} /> </span><span>Help</span>
                        </Link>
                    </div>
                </li>
            </ul>
            <div className="side-button login">
                <Link to="/" ><span className="me-2"><FontAwesomeIcon icon={faSignOutAlt} /></span><span >Login</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;