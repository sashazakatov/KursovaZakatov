import { useDispatch, useSelector } from "react-redux";
import { removeItem } from 'store/baseJobsSlice'
import { getBaseJobs } from 'store/selectors'
import { ImBin } from 'react-icons/im';


const BaseJobList = () =>{
    const jobs = useSelector(getBaseJobs);
    const dispatch = useDispatch();
    return(
        <ul>
        { jobs.map(({id, title}) =>
            <li key={id}>
                <p>{title}</p>
                <button onClick={() => dispatch(removeItem(id))}>
                    <ImBin/>
                </button>
            </li>
        )}
        </ul>
    )
}

export default BaseJobList;