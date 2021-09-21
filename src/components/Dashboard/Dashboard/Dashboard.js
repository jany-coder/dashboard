import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Rightbar from './../Rightbar/Rightbar';
import './_dashboard.scss'
import Addgroup from '../Addgroup/Addgroup';

const Dashboard = () => {
    return (
        <section className="container-fluid">
            <div  className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="admin-bg col-md-8 ">
                  <Addgroup></Addgroup>
                </div>
                <div className="col-md-2">
                    <Rightbar />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;