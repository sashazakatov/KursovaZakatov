import { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import myPhoto from 'images/placeholderForProfile.jpg';
import { useSelector } from 'react-redux';
import { getBaseJobs } from 'store/selectors';
import { Div, Link } from './JodDetails.styled';

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
        <>
            <Link to={locationRef.current}>Go back</Link>
            <Div>
                <div>
                    <img
                        width='255' 
                        src={myPhoto} 
                        alt="" 
                    />
                </div>
                <div>
                    <h2>Information about job</h2>
                    <p>Title: {title}</p>
                    <p>Description: {description}</p>
                    <p>Salary: {salary}</p>
                    <p>Employer: {employer}</p>
                </div>
            </Div>
        </>
    )
}
export default JodDetails;