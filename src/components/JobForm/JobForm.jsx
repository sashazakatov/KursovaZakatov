import { useDispatch } from "react-redux";
import Modal from "components/Modal/Modal";
import { Job } from 'Api/Job'
import { addItem } from "store/baseJobsSlice";
import { Form, Label, Text, Input, Textarea, Submit } from './JobForm.styled'

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
            <Form onSubmit={(e) => handelSubmit(e)}>
                <Label>
                    <Text>title</Text>
                    <Input
                        type='text'
                        name='title'
                        required
                    />
                </Label>
                <Label>
                    <Text>salary</Text>
                    <Input
                        type='number'
                        name='salary'
                        min='0'
                        required
                    />
                </Label>
                <Label>
                    <Text>employer</Text>
                    <Input
                        type = 'text'
                        name = 'employer'
                        required
                    />
                </Label>
                <Label>
                    <Text>description</Text>
                    <Textarea 
                        name="description"
                        cols="30"
                        rows="10" 
                        required
                    />
                </Label>
                <Submit type='submit'>create</Submit>
            </Form>
        </Modal>
    )
}
export default JobForm;