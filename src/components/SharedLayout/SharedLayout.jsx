import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () =>{
    const [ openModal, setOpenModal ] = useState(false);
    return(
        <>
            <header>
                <nav>
                    <NavLink to={'/BaseJob'}>BaseJob</NavLink>
                    <NavLink to={'/BaseUnemployed'}>BaseUnemployed</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )

}
export default SharedLayout;