import { useAuth } from "../shared/UseAuth";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedPage = () => {
    const {user} = useAuth();
    return user ? <Outlet/> : <Navigate to='/' replace/>
};

export default ProtectedPage;