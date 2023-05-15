import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { change } from "store/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(change(''))
    }, [dispatch])

    return(
        <input 
            type='text'
            name='Filter' 
            onChange={(e) => dispatch(change(e.target.value.trim()))}
        />
    )
}
export default Filter;