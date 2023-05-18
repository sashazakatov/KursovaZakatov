import { NavLink, Outlet } from "react-router-dom";
import { Header, Nav, Link, Main } from './SharedLayout.styled';

const SharedLayout = () =>{
    return(
        <>
            <Header>
                <NavLink to={'/'}>💻 Logo</NavLink>
                <Nav>
                    <Link to={'/BaseJob'}>Base job</Link>
                    <Link to={'/BaseUnemployed'}>Base unemployed</Link>
                </Nav>
            </Header>
            <Main>
                <Outlet/>
            </Main>
        </>
    )

}
export default SharedLayout;