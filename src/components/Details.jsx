import Cookies from "js-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetsingleproductQuery } from "../feature/api/productApi";
import { Button } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../feature/services/productsSlice";

const Details = () => {
  const { id } = useParams();
  const nav=useNavigate();
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const { data: singleproduct } = useGetsingleproductQuery({ id, token });

  const [colorlay, setColorlay] = useState("");
  const [sizelay, setSizelay] = useState("");
  const choice = { colorlay, sizelay };
   
  const addtocarthandler=()=>{
    dispatch( addtocart({
      ...singleproduct,
      choice
    }))
    nav("/")
    
  }

  return (
    <>   
    <div className=" bg-white flex flex-wrap sm:flex-nowrap sm:justify-center items-center gap-5 sm:gap-5 p-10">
      <div className=" rounded-xl overflow-hidden">
        <img
            src={singleproduct?.image} 
        />
      </div>
      <div>
        <div className=" flex flex-col justify-between gap-9">
          <div className=" flex flex-col justify-center gap-1">
            <h5 className="card-title">{singleproduct?.title}</h5>
            <p className="card-text">{singleproduct?.description}</p>
            <h1 className=" text-slate-400 text-2xl font-bold">
              $-{singleproduct?.price}
            </h1>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col justify-center gap-4">
              <div className=" text-lg font-semibold">Colors</div>
              <div className=" flex justify-start gap-3">
                {singleproduct?.color.map((co, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setColorlay(co);
                    }}
                    className={`${co===colorlay ? "border-2 border-red-400": ''} border w-7 h-7 rounded-full active `}
                    style={{ backgroundColor: `${co}` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className=" text-lg font-semibold">Sizes</div>
              <div className=" flex justify-start gap-3">
                {singleproduct?.size.map((si, i) => (
                  <div
                    className={`${si===sizelay ? "border-b-2 border-red-400":""}`}
                    onClick={() => {
                      setSizelay(si);
                    }}
                    key={i}
                  >
                    {si}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex justify-around items-center">

            <Button
            className=' btn btn-outline btn-info'
             variant="gradient" gradient={{ from: 'cyan', to: 'violet', deg: 0 }} radius="lg"
              onClick={addtocarthandler}
            >
              Add To Cart
            </Button>
            <Link to={"/"}>
              <Button>Back</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Details;
