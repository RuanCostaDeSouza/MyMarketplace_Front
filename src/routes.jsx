import { useEffect }                              from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth }                                from "./hooks/Auth";
import { toast }                                  from "react-toastify";
import React                                      from "react";
import SignIn                                     from "./pages/SignIn"
import SignUp                                     from "./pages/SignUp"
import Template404                                from "./pages/404";

import CatalogPage                                from "./pages/CatalogPage"

const PrivateRoute = ({children, redirectTo})=>{
    const {token}= useAuth();

    useEffect(()=>{
      if(!token)toast.warn('É necessario estar logado paraacessar esta pagina!!')
    },[])
    
    return token ? children: <Navigate to={redirectTo}/>
}
  
const LoggedRoute = ({ children, redirectTo }) => {
    const { token } = useAuth();
    return token ? <Navigate to={redirectTo} /> : children;
}

export default function AllRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<LoggedRoute redirectTo='/'><SignIn /></LoggedRoute>} />
          <Route path='/signup' element={<LoggedRoute redirectTo='/'><SignUp /></LoggedRoute>} />
          <Route path='/' element={<PrivateRoute redirectTo='/signin'><CatalogPage /></PrivateRoute>} />
          <Route path='*' element={<Template404 />} />
        </Routes>
      </BrowserRouter>
    )
  }