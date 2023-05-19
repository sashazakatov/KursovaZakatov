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
        const {
            name, 
            age, 
            phoneNumder, 
            sity, 
            email, 
            profession, 
            education, 
            reasonsForDismissal 
        } = form.elements;
        const unemployed = new Unemployed({
            name: name.value,
            age: age.value,
            phoneNumder: phoneNumder.value,
            sity: sity.value,
            email: email.value,
            profession: profession.value,
            education: education.value,
            reasonsForDismissal: reasonsForDismissal.value,
        })

        console.log(unemployed);
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
                    />
                </Label>
                <Label>
                    age
                    <Input
                        type='number'
                        name='age'
                    />
                </Label>
                <Label>
                    phone numder
                    <Input
                        type='number'
                        name='phoneNumder'
                    />
                </Label>
                <Label>
                    sity
                    <Input
                        type = 'text'
                        name = 'sity'
                    />
                </Label>
                <Label>
                    email
                    <Input
                        type = 'text'
                        name = 'email'
                    />
                </Label>
                <Label>
                    profession
                    <Input
                        type = 'text'
                        name = 'profession'
                    />
                </Label>
                <Label>
                    education
                    <Input
                        type = 'text'
                        name = 'education'
                    />
                </Label>
                <Label>
                    Reasons for dismissal
                    <Textarea 
                        name="reasonsForDismissal"
                        cols="30"
                        rows="8" 
                    />
                </Label>
                <Submit type='submit'>add form</Submit>
            </Form>
        </Modal>
    )
}
export default UnemployedForm;