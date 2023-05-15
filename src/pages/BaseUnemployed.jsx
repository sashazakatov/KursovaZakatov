import BaseUnemployedList from "components/BaseUnemployedList";
import Filter from 'components/Filter'
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "store/openModalSlice";
import { getOpenModal } from 'store/selectors'
import BaseJobForm from 'components/BaseJobForm';


const BaseUnemployed = () => {
    const dispatch = useDispatch()
    const isOpenModal = useSelector(getOpenModal);
    return(
        <>
            <div>
                <Filter/>
                <button onClick={() => dispatch(toggle(true))}> add unemployed</button>
                { isOpenModal && <BaseJobForm/>}
            </div>
            <p>this is a BaseUnemployed</p>
            <BaseUnemployedList/>
        </>
    )
}
export default BaseUnemployed;