import Cookies from "js-cookie"
import { useParams } from "react-router-dom"
import { useGetsingleproductQuery } from "../feature/api/productApi"
import { Button } from "@mantine/core"
import { useState } from "react"

const Details = () => {
    const {id}=useParams()
    const token=Cookies.get("token")
    const {data:singleproduct}=useGetsingleproductQuery({id,token})
    console.log(singleproduct)
    const [colorlay,setColorlay]=useState("")
    const [sizelay,setSizelay]=useState("")

    console.log(colorlay)
    console.log(sizelay)

  return (
    <>
    <div className=" grid grid-cols-12 gap-5">
      <div className=" col-span-4">
      <div className="flex justify-center items-center h-screen">
        <img src={singleproduct?.image} className=" w-36 sm:w-40 md:w-72" alt="..." />
      </div>
      </div>
      <div className=" col-span-8">
        <div className=" flex justify-center items-center w-full h-screen">
          <div className=" flex flex-col justify-center gap-9 h-96">
            <div className=" flex flex-col justify-center gap-1">
              <h5 className="card-title">{singleproduct?.title}</h5>
              <p className="card-text">{singleproduct?.description}</p>
              <h1 className=" text-slate-400 text-2xl font-bold" >$-{singleproduct?.price}</h1>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex flex-col justify-center gap-4">
              <div className=" text-lg font-semibold">Colors</div>
                <div className=" flex justify-start gap-3">
                {singleproduct?.color.map((co,i)=>(
                  <button key={i} onClick={()=>{setColorlay(co)}} className="  w-7 h-7 rounded-full" style={{backgroundColor:`${co}`}}/>
              ))}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className=" text-lg font-semibold">size</div>
                <div className=" flex justify-start gap-3" >
                {singleproduct?.size.map((si,i)=>(
                  <div onClick={()=>{setSizelay(si)}} key={i}>{si}</div>
              ))}
                </div>
              
              </div>
            </div>
            <div className=" flex justify-around items-center">
              <Button>Add To Cart</Button>
              <Button>Back</Button>
            </div>
          </div>
        
        </div>
      </div>
   
    </div>
    </>
  )
}

export default Details