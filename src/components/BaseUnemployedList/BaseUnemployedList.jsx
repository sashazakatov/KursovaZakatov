import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBaseUnemployed } from "store/selectors";
import { removeItem } from 'store/baseUnemployedSlice';
import { NavLink, useLocation } from "react-router-dom";

import { AiFillEye } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';

const BaseUnemployedList = () => {
    const location = useLocation();
    const unemployed = useSelector(getBaseUnemployed);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('unemployed', JSON.stringify(unemployed));
    }, [unemployed])

    return(
       <ul>
            { unemployed.map(({id, name }) => 
            <li key={id}>
                <p>{ name }</p>
                <NavLink to={`/BaseJob/${id}`} state={{form: location}}>
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