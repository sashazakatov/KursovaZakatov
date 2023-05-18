import { useDispatch, useSelector } from "react-redux";
import { removeItem } from 'store/baseJobsSlice'
import { getBaseJobs, getFilter } from 'store/selectors'
import { ImBin } from 'react-icons/im';


const BaseJobList = () =>{
    const jobs = useSelector(getBaseJobs);

    console.log(jobs);

    const filter = useSelector(getFilter)
    const dispatch = useDispatch();
    return(
        <ul>
        { jobs
            .filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, title}) =>
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