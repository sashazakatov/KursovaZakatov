import { useDispatch, useSelector } from "react-redux";
import { removeItem } from 'store/baseJobsSlice'
import { getBaseJobs, getFilter } from 'store/selectors'
import { NavLink, useLocation } from "react-router-dom";

import { ImBin } from 'react-icons/im';
import { AiFillEye } from 'react-icons/ai';
import myPhoto from 'images/placeholderForProfile.jpg';
import { useEffect } from "react";

import { List, Item, Div, Button } from './BaseJobList.styled' 

const BaseJobList = () =>{
    const location = useLocation();
    const jobs = useSelector(getBaseJobs);

    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }, [jobs])

    return(
        <List>
        { jobs
            .filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, title}) =>
                <Item key={id}>
                    <img
                        width='125' 
                        src={myPhoto}
                        alt=''
                    />
                    <h2>{title}</h2>
                    <Div>
                        <NavLink to={`/BaseJob/${id}`} state={{form: location}}>
                            <AiFillEye />
                        </NavLink>
                        <Button onClick={() => dispatch(removeItem(id))}>
                            <ImBin/>
                        </Button>
                    </Div>
                </Item>
        )}
        </List>
    )
}

export default BaseJobList;