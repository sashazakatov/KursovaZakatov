import BaseUnemployedList from "components/BaseUnemployedList";
import Filter from 'components/Filter'
import UnemployedForm from "components/UnemployedForm/UnemployedForm";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "store/openModalSlice";
import { getOpenModal } from 'store/selectors'
import { Div, Button } from './BaseUnemployed.styled';

const BaseUnemployed = () => {
    const dispatch = useDispatch()
    const isOpenModal = useSelector(getOpenModal);
    return(
        <>
            <Div>
                <Filter/>
                <Button onClick={() => dispatch(toggle(true))}> add unemployed</Button>
                { isOpenModal && <UnemployedForm/>}
            </Div>
            <BaseUnemployedList/>
        </>
    )
}
export default BaseUnemployed;