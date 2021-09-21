import React, { useState } from 'react';
import './_rightbar.scss';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';


const Rightbar = () => {


    const [bgColor1, setBgColor1] = useState()
    const [bgColor2, setBgColor2] = useState()
    const [bgColor3, setBgColor3] = useState()

    let history = useHistory();

    const handleManager = (manage) => {
        history.push(`/dash-board/admin/${manage}`);

        if (manage === "manage-user") {
            setBgColor1({backgroundColor: "tomato"})
            setBgColor2({backgroundColor: "#006838"})
            setBgColor3({backgroundColor: "#006838"})
        }
        if (manage === "manage-group") {
            setBgColor2({backgroundColor: "tomato"})
            setBgColor1({backgroundColor: "#006838"})
            setBgColor3({backgroundColor: "#006838"})
        }
        if (manage === "manage-roles") {
            setBgColor3({backgroundColor: "tomato"})
            setBgColor1({backgroundColor: "#006838"})
            setBgColor2({backgroundColor: "#006838"})
        }

    }
    return (
        <div className="container-fluid mt-4">
            <div  className="manage d-flex align-items-center">
                <span className="icon"><FontAwesomeIcon className="me-2" icon={faTasks} /></span>
                <h5>MANAGEMENT</h5>
            </div>
            <div className="manage">
                <h5>MANAGE</h5>
                <p>Add, Edit, Delete Users, Groups and Roles</p>
            </div>

            <div className="d-flex flex-column">
               
                        <div className="manage-btn-handle d-flex align-items-center mt-2" onClick={()=> handleManager("manage-user")}>
                            <div style ={bgColor1} className="manage-btn">01</div>
                            <div className="manage">
                                <h5>MANAGE USERS</h5>
                                <p>Lets you manage user</p>
                            </div>
                        </div>

                        <div className="manage-btn-handle d-flex align-items-center mt-2" onClick={() => handleManager("manage-group")}>
                            <div style ={bgColor2} className="manage-btn">02</div>
                            <div className="manage">
                                <h5>MANAGE GROUPS</h5>
                                <p>Lets you manage user</p>
                            </div>
                        </div>

                        <div className="manage-btn-handle d-flex align-items-center mt-2" onClick={()=> handleManager("manage-roles")}>
                            <div style ={bgColor3} className="manage-btn">03</div>
                            <div className="manage">
                                <h5>MANAGE ROLES</h5>
                                <p>Lets you manage user</p>
                            </div>
                        </div>
            </div>

        </div>
    );
};

export default Rightbar;