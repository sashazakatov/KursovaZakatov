import Modal from 'components/Modal';
import { useDispatch } from "react-redux";
import { addItem } from 'store/baseUnemployedSlice';
import { Unemployed } from 'Api/Unemployed';
import { Form, Submit, Textarea, Input, Label } from './UnemployedForm.styled'

const UnemployedForm = () => {
    const dispatch = useDispatch();
    const handelSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const unemployed = new Unemployed({
            name: form.elements.name.value,
            age: form.elements.age.value,
            phoneNumder: form.elements.phoneNumder.value,
            sity: form.elements.sity.value,
            email: form.elements.email.value,
            profession: form.elements.profession.value,
            education: form.elements.education.value,
            reasonsForDismissal: form.elements.reasonsForDismissal.value,
        })
        dispatch(addItem(unemployed.getInfo()))
        form.reset();
    }

    return(
        <Modal>
            <Form onSubmit={(e) => handelSubmit(e)}>
                <Label>
                    name
                    <Input 
                        type='text'
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                </Label>
                <Label>
                    age
                    <Input
                        type='number'
                        name='age'
                        min='1'
                        max='200'
                        required
                    />
                </Label>
                <Label>
                    phone numder
                    <Input
                        type='tel'
                        name='phoneNumder'
                        maxLength="35"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        required
                    />
                </Label>
                <Label>
                    sity
                    <Input
                        type = 'text'
                        name = 'sity'
                        required
                    />
                </Label>
                <Label>
                    email
                    <Input
                        type = 'email'
                        name = 'email'
                        required
                    />
                </Label>
                <Label>
                    profession
                    <Input
                        type = 'text'
                        name = 'profession'
                        required
                    />
                </Label>
                <Label>
                    education
                    <Input
                        type = 'text'
                        name = 'education'
                        required
                    />
                </Label>
                <Label>
                    Reasons for dismissal
                    <Textarea 
                        name="reasonsForDismissal"
                        cols="30"
                        rows="8" 
                        required
                    />
                </Label>
                <Submit type='submit'>create</Submit>
            </Form>
        </Modal>
    )
}
export default UnemployedForm;