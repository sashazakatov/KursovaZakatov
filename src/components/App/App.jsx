import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "components/SharedLayout";
import Home from "pages/Home";
import BaseJob from "pages/BaseJob";
import BaseUnemployed from "pages/BaseUnemployed";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home />}/>
        <Route path='BaseJob' element={<BaseJob/>}></Route>
        <Route path='BaseUnemployed' element={<BaseUnemployed/>}></Route>
      </Route>
      <Route path={'*'} element={<Navigate to={'/'}/>}/>
    </Routes>
  );
};

