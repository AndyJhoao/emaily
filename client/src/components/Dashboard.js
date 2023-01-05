import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () =>{
    return(
        <div className="containter-cards">
            <SurveyList></SurveyList>
            <div className='fixed-action-btn'>
                <Link to="/surveys/new" className='btn-floating btn-large' style={{ background: "#CF0A0A"}}>
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;