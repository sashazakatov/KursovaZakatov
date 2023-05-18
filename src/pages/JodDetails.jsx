import { useRef } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import myPhoto from 'images/placeholderForProfile.jpg';

import { useSelector } from 'react-redux';
import { getBaseJobs } from 'store/selectors'

const JodDetails = () => {
    const location = useLocation();
    const locationRef = useRef(location.state.form ?? '/');
    const { jobId } = useParams();

    const { 
        title, 
        description, 
        salary, 
        employer 
    } = useSelector(getBaseJobs).find((item) => item.id === jobId);

    return(
        <section>
            <NavLink to={locationRef.current}>Go back</NavLink>
            <img
                width='255' 
                src={myPhoto} 
                alt="" 
            />
            <div>
                <h2>Information about job</h2>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <p>Salary: {salary}</p>
                <p>Employer: {employer}</p>
            </div>
        </section>
    )
}
export default JodDetails;