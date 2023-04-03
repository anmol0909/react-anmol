import React from "react";
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1>DASHBOARD</h1>
            <Link to="new">Create New Blog</Link><br/>
            <Link to="show">Show Blog</Link>
        </div>
    );
};

export default Dashboard;