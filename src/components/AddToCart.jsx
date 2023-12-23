import { useSelector } from "react-redux"
import Cart from "./Cart"
import AddToCartNavbar from "./AddToCartNavbar"
import { Link } from "react-router-dom"
import { Button } from "@mantine/core"

const AddToCart = () => {
    const {products:addproducts}=useSelector(state=>state.products)
    console.log(addproducts,"addtocartcomponent")
    const total=addproducts.reduce((pv,cv)=>pv+cv.price*cv.qty,0);   
  return (
    <>
    {addproducts.length>0 ? (
    <div className=" bg-white py-10">
    <AddToCartNavbar/>
    <div className=" container mx-auto py-5">
    
      {addproducts.map(item=>{
        return(
          <Cart key={item._id} item={item}/>
        )
      })}

    </div>
    <hr className=" w-[90%] mx-auto border-2" />
    <div className=" flex justify-around items-center gap-10 mx-auto mt-5">
      <div className=" font-bold text-2xl">Total</div>
      <div className=" font-semibold">$- {total.toFixed(2)}</div>
    </div>
    </div>
    ):(
      <div>
        <div className="flex justify-center items-center h-screen">
        <Link to={"/"}>
        <Button variant="gradient" gradient={{ from: 'cyan', to: 'violet', deg: 0 }} radius="lg" className=" btn btn-outline btn-info ">plz select item</Button>
        </Link>
        </div>
      </div>
    )}
    </>
  )
}

export default AddToCart