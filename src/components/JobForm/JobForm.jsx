import { useDispatch } from "react-redux";

import Modal from "components/Modal/Modal";
import { Job } from 'Api/Job'
import { addItem } from "store/baseJobsSlice";

const JobForm = () => {
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const { title, salary, employer, description } = form.elements;
        const newJob = new Job({
            title: title.value,
            salary: salary.value,
            employer: employer.value,
            description: description.value,
        });

        dispatch(addItem(newJob.getInfo()));

        form.reset();
    }

    return(
        <Modal>
            <form onSubmit={(e) => handelSubmit(e)}>
                <label>
                    title
                    <input 
                        type='text'
                        name='title'
                    />
                </label>
                <label>
                    salary
                    <input
                        type='number'
                        name='salary'
                    />
                </label>
                <label>
                    employer
                    <input
                        type = 'text'
                        name = 'employer'
                    />
                </label>
                <label>
                    description
                    <textarea 
                        name="description"
                        cols="30"
                        rows="10" 
                    />
                </label>
                <button type='submit'>add form</button>
            </form>
        </Modal>
    )
}
export default JobForm;