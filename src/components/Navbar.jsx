import Cookies from "js-cookie"
import { useDispatch } from "react-redux"
import { removeuser } from "../feature/services/authSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const dispatch=useDispatch();
    const nav=useNavigate();
    const user=JSON.parse(Cookies.get("user"))
    const token=Cookies.get("token")
    const logoutHander=()=>{
        dispatch(removeuser());
        nav("/login")
    }

    console.log(user)
    console.log(token)
  return (
    <div className=" flex justify-around items-center">
        <div>MTH</div>
        <div className=" flex justify-center gap-3 items-center">
            <p>{user?.username}</p>
            <button onClick={logoutHander} className="bg-red-500">Logout</button>
        </div>
    </div>
  )
}

export default Navbar