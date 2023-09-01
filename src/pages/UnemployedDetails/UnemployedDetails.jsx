import { useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import myPhoto from 'images/placeholderForProfile.jpg';
import { getBaseUnemployed } from "store/selectors";
import { Div, Link } from './UnemployedDetails.styled';

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
        <>
            <Link to={locationRef.current}>Go back</Link>
            <Div>
                <div>
                    <img
                        width='255' 
                        src={myPhoto} 
                        alt="" 
                    />
                </div>
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
            </Div>
        </>
    )
}
export default UnemployedDetails;