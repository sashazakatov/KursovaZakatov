import BaseJobList from 'components/BaseJobList'
import Filter from 'components/Filter';
import JobForm from 'components/JobForm';

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
                { isOpenModal && <JobForm />}
            </div>
            <BaseJobList/>
        </>
    )
}
export default BaseJob; 