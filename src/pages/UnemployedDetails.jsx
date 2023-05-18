import { useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams, NavLink } from "react-router-dom";
import myPhoto from 'images/placeholderForProfile.jpg';

import { getBaseUnemployed } from "store/selectors";

const UnemployedDetails = () => {
    const location = useLocation();
    const locationRef = useRef(location.state.form ?? '/');
    const { unemployedId } = useParams();


    const {
        name, 
        age, 
        sity, 
        phoneNumder, 
        email, 
        profession, 
        education, 
        reasonsForDismissal, 
    } = useSelector(getBaseUnemployed).find((item) => item.id === unemployedId);

    return(
        <section>
            <NavLink to={locationRef.current}>Go back</NavLink>
            <img
                width='255' 
                src={myPhoto} 
                alt="" 
            />
            <div>
                <h2>Information about unemployed</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Sity: {sity}</p>
                <p>Phone numder: {phoneNumder}</p>
                <p>Email: {email}</p>
                <p>Profession: {profession}</p>
                <p>Education: {education}</p>
                <p>Reasons for dismissal: {reasonsForDismissal}</p>
            </div>
        </section>
    )
}
export default UnemployedDetails;