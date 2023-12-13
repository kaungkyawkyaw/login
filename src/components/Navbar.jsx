import Cookies from "js-cookie"
import { useDispatch, useSelector } from "react-redux"
import { removeuser } from "../feature/services/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Input,Badge } from '@mantine/core';
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { setSearch } from "../feature/services/productsSlice";
const Navbar = () => {
    // const products=JSON.parse(localStorage.getItem("userproduct"));
    const {search}=useSelector(state=>state.products)
    const {products}=useSelector(state=>state.products)
    console.log(products,"navbarkaprod")
    const dispatch=useDispatch();
    const nav=useNavigate();
    const user=JSON.parse(Cookies.get("user"))
    const logoutHander=()=>{
        dispatch(removeuser());
        nav("/login")
    }
    const se=<CiSearch />
  return (
    <>
    <div className=" sticky top-0 z-50 bg-gradient-to-r backdrop-blur py-2">
      <div className=" w-[90%] mx-auto flex justify-between gap-2 items-center">
        <div className="font-bold text-2xl text-slate-500">Fashion Store</div>
        <div className=" flex justify-center items-center gap-7 items-center">
          <div className=" flex justify-center gap-2 items-center">
            <Input variant="filled" value={search} onChange={(e)=>dispatch(setSearch(e.target.value))} leftSection={se} placeholder="Input component" />
            <Link to={"/addtocart"}>
            <div className=" relative">
              <AiOutlineShoppingCart className=" text-slate-500 text-2xl" />
              <Badge className=" absolute bottom-5 left-4" color="red" size="sm">{products.length}</Badge>
            </div>
            </Link>
          </div>
          <Menu width={100} shadow="md">
            <Menu.Target>
              <button className="text-slate-500 border border-2 border-slate-500 active:bg-slate-400 select-none w-10 h-10 rounded-full flex justify-center items-center">
              {user?.username.toUpperCase().substring(0,1)}
              </button>
            </Menu.Target>

            <Menu.Dropdown className=" flex justify-center items-center">
              <Menu.Item component="a" href="https://mantine.dev">
                Info
              </Menu.Item>
              <Menu.Item
                component="a"
                onClick={logoutHander}
              >
                Log Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
    </>
  
  )
}

export default Navbar