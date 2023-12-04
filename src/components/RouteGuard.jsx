import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"

const RouteGuard = ({children}) => {
    const nav=useNavigate();
    const token=Cookies.get("token")
    if (token) {
        return {children};
    }else{
        return nav("/login")
    }
 
}

export default RouteGuard