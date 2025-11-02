import { useNavigate } from "react-router";
import NavigatorObject from "../services/navigator.service";

export default function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const loginCreds = localStorage.getItem('login');
    console.log(loginCreds);

    function navigateToLogin() {
        navigate('/');
    }
    NavigatorObject.setNavigate(navigate);
    return <>
        {loginCreds ? children : <div>
            Please login first to access
            <button onClick={navigateToLogin}>Login</button>
        </div>}
    </>
}