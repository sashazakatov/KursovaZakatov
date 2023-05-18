import { useDispatch, useSelector } from "react-redux";
import { removeItem } from 'store/baseJobsSlice'
import { getBaseJobs, getFilter } from 'store/selectors'
import { NavLink, useLocation } from "react-router-dom";

import { ImBin } from 'react-icons/im';
import { AiFillEye } from 'react-icons/ai';
import myPhoto from 'images/placeholderForProfile.jpg';
import { useEffect } from "react";

const BaseJobList = () =>{
    const location = useLocation();
    const jobs = useSelector(getBaseJobs);

    const filter = useSelector(getFilter)
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }, [jobs])

    return(
        <ul>
        { jobs
            .filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, title}) =>
                <li key={id}>
                    <img
                        width='125' 
                        src={myPhoto}
                        alt=''
                    />
                    <p>{title}</p>
                    <NavLink to={`/BaseJob/${id}`} state={{form: location}}>
                        <AiFillEye />
                    </NavLink>
                    <button onClick={() => dispatch(removeItem(id))}>
                        <ImBin/>
                    </button>
                </li>
        )}
        </ul>
    )
}

export default BaseJobList;