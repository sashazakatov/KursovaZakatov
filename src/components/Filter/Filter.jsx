import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { change } from "store/filterSlice";
import { Input } from './Filter.styled'

const Filter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(change(''))
    }, [dispatch])

    return(
        <Input 
            type='text'
            name='Filter' 
            onChange={(e) => dispatch(change(e.target.value.trim()))}
        />
    )
}
export default Filter;