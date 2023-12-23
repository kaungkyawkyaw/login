import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
import { decrease, increase, removecart } from '../feature/services/productsSlice';

const Cart = ({item}) => {
  console.log(item,"cartkalartar")
  const oneItemprice=item.price * item.qty
  // const {products:addproducts}=useSelector(state=>state.products)
  const dispatch=useDispatch();
  return (
    <>
    <div className=' flex justify-between sm:justify-center sm:gap-96 items-center mx-5'>  
          <div className=' flex justify-center items-center gap-3 my-3 '>
            <div className=' rounded-lg overflow-hidden w-20'>
              <img src={item?.image} alt="" />
            </div>
            <div>
              <h1>{item.title.substring(0,9)}...</h1>
              <div>
              {item?.choice?.colorlay? <h1>Color - {item?.choice?.colorlay}</h1>: null}
              {item?.choice?.sizelay? <h1>Size - {item?.choice?.colorlay}</h1>: null}

              </div>
              <p className=' text-slate-500 font-semibold'>$ - {oneItemprice.toFixed(2)}</p>
            <button onClick={()=>dispatch(removecart(item))} className=' text-red-600'>remove</button>
            </div>
          </div>
        <div className='flex justify-center items-center gap-3'>
          <button onClick={()=>dispatch(decrease(item))} className=' bg-slate-400 border w-5 h-5 rounded-full flex justify-center items-center '><IoMdArrowDropdown /></button>
          <div className=' w-4 flex justify-center items-center'>{item?.qty}</div>
          <button onClick={()=> dispatch(increase(item))} className=' bg-slate-400 border w-5 h-5 rounded-full flex justify-center items-center'><IoMdArrowDropup /></button>
        </div>
    </div>
    </>
  )
}

export default Cart