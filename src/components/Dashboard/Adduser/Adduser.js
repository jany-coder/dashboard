import React from 'react';
import { faTachometerAlt, faSearch, faUsers, faDownload, faPlusCircle, faChevronDown,faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_adduser.scss';

const Admin = () => {
    return (
        <div className="container-fluid px-4 py-4">
            <div className="d-flex justify-content-between ">
                <div className="admin-header">
                    <h5><span>Dashboard</span> // <span>Admin</span></h5>
                    <p>Add, Edit, Delete Group</p>
                </div>
                <div className="dash-btn d-flex align-items-center">
                    <span className="rounded"><FontAwesomeIcon className="me-1" icon={faTachometerAlt} />Dashboard</span>
                </div>
            </div>

            <div className="group-summary">
                <h5>Groups Summary</h5>
            </div>
            <div className=" group-content d-flex justify-content-between">

                <div className="round-icon d-flex align-items-center">
                    <span className="icon me-3"> <FontAwesomeIcon icon={faUsers} /></span>
                    <div><span className="head-text"><strong>Total Groups</strong></span> <br /><span className="sub-text">541 groups</span></div>
                </div>
                <div className="round-icon d-flex align-items-center">
                    <span className="icon me-3"> <FontAwesomeIcon icon={faUsers} /></span>
                    <div><span className="head-text"><strong>This Year</strong></span> <br /><span className="sub-text">541 groups</span></div>
                </div>
                <div className="round-icon d-flex align-items-center">
                    <span className="icon me-3"> <FontAwesomeIcon icon={faUsers} /></span>
                    <div><span className="head-text"><strong>This Month</strong></span> <br /><span className="sub-text">541 groups</span></div>
                </div>
                <div className="round-icon d-flex align-items-center">
                    <span className="icon me-3"> <FontAwesomeIcon icon={faUsers} /></span>
                    <div><span className="head-text"><strong>This Week</strong></span> <br /><span className="sub-text">541 groups</span></div>
                </div>

            </div>
            {/* Download */}
            <div className="d-flex mt-4">
                <div className="me-3 download">
                    <span><FontAwesomeIcon className="me-2" icon={faDownload} /></span><span>Download CSV</span>
                </div>
                <div className="download">
                    <span><FontAwesomeIcon className="me-2" icon={faDownload} /></span>Download PDF
                </div>

                <div className="ms-auto add-group d-flex align-items-center">
                    <span><FontAwesomeIcon className=" icon-add me-2" icon={faPlusCircle} /></span>Add Group
                </div>
            </div>
            {/* Search */}
            <div className="search d-flex justify-content-end  mt-4">
                <div className="search-icon d-flex align-items-center">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <input type="text" id="box" placeholder="Search" className="search__box" />
            </div>
            {/* Table */}
            <div className="mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="d-flex justify-content-between">
                                    <div className="t-head">Group ID</div>
                                    <div><FontAwesomeIcon className="icon" icon={faChevronDown} /></div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="d-flex justify-content-between">
                                    <div className="t-head">Group Name</div>
                                    <div><FontAwesomeIcon className="icon" icon={faChevronDown} /></div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="d-flex justify-content-between">
                                    <div className="t-head">Group Description</div>
                                    <div><FontAwesomeIcon className="icon" icon={faChevronDown} /></div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="d-flex justify-content-between">
                                    <div className="t-head">Group Date</div>
                                    <div><FontAwesomeIcon className="icon" icon={faChevronDown} /></div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="d-flex justify-content-between">
                                    <div className="t-head">Action</div>
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#546651</th>
                            <td>Support Group</td>
                            <td>Support Live Customer</td>
                            <td>4.44 AM, 17 August 2021</td>
                            <td className="d-flex"><span className="me-2"><FontAwesomeIcon className="pe-1" icon={faEdit} /><u>edit</u></span> <span className="ms-4 delete"><FontAwesomeIcon className="pe-1" icon={faTrashAlt} /><u>delete</u></span></td>
                        </tr>
                        <tr>
                            <th scope="row">#546651</th>
                            <td>Support Group</td>
                            <td>Support Live Customer</td>
                            <td>4.44 AM, 17 August 2021</td>
                            <td className="d-flex"><span className="me-2"><FontAwesomeIcon className="pe-1" icon={faEdit} /><u>edit</u></span> <span className="ms-4 delete"><FontAwesomeIcon className="pe-1" icon={faTrashAlt} /><u>delete</u></span></td>
                        </tr>
                        <tr>
                            <th scope="row">#546651</th>
                            <td>Support Group</td>
                            <td>Support Live Customer</td>
                            <td>4.44 AM, 17 August 2021</td>
                            <td className="d-flex"><span className="me-2"><FontAwesomeIcon className="pe-1" icon={faEdit} /><u>edit</u></span> <span className="ms-4 delete"><FontAwesomeIcon className="pe-1" icon={faTrashAlt} /><u>delete</u></span></td>
                        </tr>
                        <tr>
                            <th scope="row">#546651</th>
                            <td>Support Group</td>
                            <td>Support Live Customer</td>
                            <td>4.44 AM, 17 August 2021</td>
                            <td className="d-flex"><span className="me-2"><FontAwesomeIcon className="pe-1" icon={faEdit} /><u>edit</u></span> <span className="ms-4 delete"><FontAwesomeIcon className="pe-1" icon={faTrashAlt} /><u>delete</u></span></td>
                        </tr>
                        <tr>
                            <th scope="row">#546651</th>
                            <td>Support Group</td>
                            <td>Support Live Customer</td>
                            <td>4.44 AM, 17 August 2021</td>
                            <td className="d-flex"><span className="me-2"><FontAwesomeIcon className="pe-1" icon={faEdit} /><u>edit</u></span> <span className="ms-4 delete"><FontAwesomeIcon className="pe-1" icon={faTrashAlt} /><u>delete</u></span></td>
                        </tr>
                        <tr>
                            <th scope="row">#546651</th>
                            <td>Support Group</td>
                            <td>Support Live Customer</td>
                            <td>4.44 AM, 17 August 2021</td>
                            <td className="d-flex"><span className="me-2"><FontAwesomeIcon className="pe-1" icon={faEdit} /><u>edit</u></span> <span className="ms-4 delete"><FontAwesomeIcon className="pe-1" icon={faTrashAlt} /><u>delete</u></span></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default Admin;