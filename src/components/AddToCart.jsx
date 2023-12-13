import { useSelector } from "react-redux"
import Cart from "./Cart"

const AddToCart = () => {
    const {products:addproducts}=useSelector(state=>state.products)
  return (
    <>
    <div>
      {addproducts.map(item=>{
        return(
          <Cart key={item._id} item={item}/>
        )
      })}
    </div>
    </>
  )
}

export default AddToCart