import Cookies from "js-cookie";
import { useGetproductQuery } from "../feature/api/productApi";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemmyar } from "../feature/services/productsSlice";

const Cards = () => {
  const token = Cookies.get("token");
  const { data } = useGetproductQuery(token);
  const { search } = useSelector((state) => state.products);
  const { itemlays: userproducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log();

  useEffect(() => {
    dispatch(itemmyar(data));
  }, [data]);
  return (
    <>
      <div className=" flex flex-wrap justify-center items-center gap-3 my-24">
        {userproducts
          ?.filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item?.title.toLowerCase().includes(search?.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((userproduct) => {
            return <Card key={userproduct._id} userproduct={userproduct} />;
          })}
      </div>
    </>
  );
};

export default Cards;
