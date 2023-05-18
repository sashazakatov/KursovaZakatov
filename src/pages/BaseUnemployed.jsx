import BaseUnemployedList from "components/BaseUnemployedList";
import Filter from 'components/Filter'
import UnemployedForm from "components/UnemployedForm/UnemployedForm";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "store/openModalSlice";
import { getOpenModal } from 'store/selectors'



const BaseUnemployed = () => {
    const dispatch = useDispatch()
    const isOpenModal = useSelector(getOpenModal);
    return(
        <>
            <div>
                <Filter/>
                <button onClick={() => dispatch(toggle(true))}> add unemployed</button>
                { isOpenModal && <UnemployedForm/>}
            </div>
            <p>this is a BaseUnemployed</p>
            <BaseUnemployedList/>
        </>
    )
}
export default BaseUnemployed;