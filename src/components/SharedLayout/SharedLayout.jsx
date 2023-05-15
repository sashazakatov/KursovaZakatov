import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () =>{
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