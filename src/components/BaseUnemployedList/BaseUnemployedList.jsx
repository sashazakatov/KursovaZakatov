import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from 'store/baseUnemployedSlice';
import { NavLink, useLocation } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import { getBaseUnemployed, getFilter } from "store/selectors";
import { List, Item, Div, Button, InformationDiv } from './BaseUnemployedList.styled'
import myPhoto from 'images/placeholderForProfile.jpg';

const BaseUnemployedList = () => {
    const location = useLocation();
    const unemployed = useSelector(getBaseUnemployed);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem('unemployed', JSON.stringify(unemployed));
    }, [unemployed])

    return(
       <List>
            { unemployed
            .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, name, profession, phoneNumder, email }) => 
            <Item key={id}>
                <Div>
                <img
                        width='125' 
                        src={myPhoto}
                        alt=''
                />
                </Div>
                <InformationDiv>
                    <h2>{name}</h2>
                    <p>profession: {profession}</p>
                    <p>phone numder: {phoneNumder}</p>
                    <p>email: {email}</p>
                </InformationDiv>
                <Div>
                    <NavLink to={`/BaseUnemployed/${id}`} state={{form: location}}>
                        <AiFillEye />
                    </NavLink>
                    <Button
                        onClick={() => dispatch(removeItem(id))}
                    >
                        <ImBin/>
                    </Button>
                </Div>
            </Item>) }
       </List>
    )
}
export default BaseUnemployedList;