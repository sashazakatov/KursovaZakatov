import BaseJobList from 'components/BaseJobList'
import Filter from 'components/Filter';
import JobForm from 'components/JobForm';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from 'store/openModalSlice'; 
import { getOpenModal } from 'store/selectors'
import { Div, Button } from './BaseJob.styled';

const BaseJob = () =>{
    const dispatch = useDispatch()
    const isOpenModal = useSelector(getOpenModal);

    return(
        <>
            <Div>
                <Filter/>
                <Button onClick={() => dispatch(toggle(true))}> add job</Button>
                { isOpenModal && <JobForm />}
            </Div>
            <BaseJobList/>
        </>
    )
}
export default BaseJob; 