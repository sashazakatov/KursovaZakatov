import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from 'store/baseUnemployedSlice';
import { NavLink, useLocation } from "react-router-dom";

import { AiFillEye } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';

import { getBaseUnemployed, getFilter } from "store/selectors";

const BaseUnemployedList = () => {
    const location = useLocation();
    const unemployed = useSelector(getBaseUnemployed);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('unemployed', JSON.stringify(unemployed));
    }, [unemployed])

    return(
       <ul>
            { unemployed
            .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, name }) => 
            <li key={id}>
                <p>{ name }</p>
                <NavLink to={`/BaseUnemployed/${id}`} state={{form: location}}>
                    <AiFillEye />
                </NavLink>
                <button
                    onClick={() => dispatch(removeItem(id))}
                >
                    <ImBin/>
                </button>
            </li>) }
       </ul>
    )
}
export default BaseUnemployedList;