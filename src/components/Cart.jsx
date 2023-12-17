import { useDispatch } from 'react-redux'
import { removecart } from '../feature/services/productsSlice';

const Cart = ({item}) => {
  const dispatch=useDispatch();
  return (
    <>
    <div className=' grid grid-cols-12'>
        
        <div className=' col-span-6'>
          <div className=' flex justify-center'>
            <div className=' rounded-lg overflow-hidden w-20'>
              <img src={item?.image} alt="" />
            </div>
            <div>
              <h1>{item.title}</h1>
            <button onClick={()=>dispatch(removecart(item))} className=' bg-red-600'>remove</button>
            </div>
          </div>
        </div>
        <div className=' col-span-6'>two</div>
    </div>
    </>
  )
}

export default Cart