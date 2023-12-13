import React from 'react'
import { useDispatch } from 'react-redux'
import { removecart } from '../feature/services/productsSlice';

const Cart = ({item}) => {
  const dispatch=useDispatch();
  return (
    <div>
        {item.title}
        <button onClick={()=>dispatch(removecart(item))} className=' bg-red-600'>remove</button>
    </div>
  )
}

export default Cart