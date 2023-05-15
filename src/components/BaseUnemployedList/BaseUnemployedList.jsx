import { useSelector, useDispatch } from "react-redux";
import { getBaseUnemployed } from "store/selectors";
import { removeItem } from 'store/baseUnemployedSlice';

import { ImBin } from 'react-icons/im';

const BaseUnemployedList = () => {
    const unemployed = useSelector(getBaseUnemployed);
    const dispatch = useDispatch();

    return(
       <ul>
            { unemployed.map(({id, name }) => 
            <li key={id}>
                <p>{ name }</p>
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