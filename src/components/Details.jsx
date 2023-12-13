import Cookies from "js-cookie"
import { useParams } from "react-router-dom"
import { useGetsingleproductQuery } from "../feature/api/productApi"

const Details = () => {
    const {id}=useParams()
    const token=Cookies.get("token")
    const {data:singleproduct}=useGetsingleproductQuery({id,token})
    console.log(singleproduct)
  return (
    <>
    <div className=" w-[50%] h-[50%]">
    <div className="card text-bg-dark">
        <img src={singleproduct?.image} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{singleproduct?.title}</h5>
          <p className="card-text">{singleproduct?.description}</p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details