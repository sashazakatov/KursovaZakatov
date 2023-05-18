import Modal from 'components/Modal';
import { useDispatch } from "react-redux";
import { addItem } from 'store/baseUnemployedSlice';
import { Unemployed } from 'Api/Unemployed';

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
            <form onSubmit={(e) => handelSubmit(e)}>
                <label>
                    name
                    <input 
                        type='text'
                        name='name'
                    />
                </label>
                <label>
                    age
                    <input
                        type='number'
                        name='age'
                    />
                </label>
                <label>
                    phone numder
                    <input
                        type='number'
                        name='phoneNumder'
                    />
                </label>
                <label>
                    sity
                    <input
                        type = 'text'
                        name = 'sity'
                    />
                </label>
                <label>
                    email
                    <input
                        type = 'text'
                        name = 'email'
                    />
                </label>
                <label>
                    profession
                    <input
                        type = 'text'
                        name = 'profession'
                    />
                </label>
                <label>
                    education
                    <input
                        type = 'text'
                        name = 'education'
                    />
                </label>
                <label>
                    Reasons for dismissal
                    <textarea 
                        name="reasonsForDismissal"
                        cols="30"
                        rows="10" 
                    />
                </label>
                <button type='submit'>add form</button>
            </form>
        </Modal>
    )
}
export default UnemployedForm;