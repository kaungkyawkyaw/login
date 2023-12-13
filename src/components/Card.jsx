import { Button } from '@mantine/core';
import { Image } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../feature/services/productsSlice';
import { Link } from 'react-router-dom';
const Card = ({userproduct}) => {
  const dispatch=useDispatch();
  // console.log(userproduct)
  return (
    <>
    {/* <div>
      {userproduct?.map((item=>{
        return(
          <div key={item._id} >
              <div className=' border p-3'>{item?.categories}</div>
          </div>
        )
      }))}
    </div> */}
    <div className=" flex  flex-col justify-center w-[250px] border rounded-lg p-3">
        <div className="flex justify-center items-center">
        {/* <Image
      isZoomed
      width={250}
      alt="NextUI Fruit Image with Zoom"
      src={userproduct?.image}
    /> */}
    <img src={userproduct?.image} alt="" />
        </div>
        <div className=" flex flex-col justify-center h-16 p-3 my-3">
            <p className=' font-bold text-slate-400'>{userproduct?.title.substring(0,18)}...</p>
            <p className=' text-slate-400 font-semibold'>$ - {userproduct?.price}</p>
        </div>
        <div  className=" flex justify-evenly gap-3 items-center h-14">
            <Button className=' btn btn-outline btn-info' onClick={()=>dispatch(addtocart(userproduct))} variant="gradient" gradient={{ from: 'cyan', to: 'violet', deg: 0 }} radius="lg">Add To Card</Button>
          <Link to={`/details/${userproduct?._id}`}>
            <Button  variant="filled" color="rgba(36, 36, 36, 1)" radius="lg">Details</Button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Card