import BaseJobList from 'components/BaseJobList'
import Filter from 'components/Filter';
import BaseJobForm from 'components/BaseJobForm';

import { useDispatch, useSelector } from 'react-redux';
import { toggle } from 'store/openModalSlice'; 
import { getOpenModal } from 'store/selectors'

const BaseJob = () =>{
    const dispatch = useDispatch()
    const isOpenModal = useSelector(getOpenModal);

    return(
        <>
            <div>
                <Filter/>
                <button onClick={() => dispatch(toggle(true))}> add job</button>
                { isOpenModal && <BaseJobForm />}
            </div>
            <BaseJobList/>
        </>
    )
}
export default BaseJob; 