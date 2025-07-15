import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import Loading from "./Loading";
import useMutationCart, { addCart } from "./useMutationCart";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetails() {
  let { id, catId } = useParams();

  const [Related, setRelated] = useState([]);
  let [imgSrc, setImgSrc] = useState();
  let [ind, setInd] = useState(0);

  let { data, mutate, error, isError, isSuccess } = useMutationCart(addCart);

  let { data: dataObj, isLoading } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: getProductDetails,
    select: (dataObj) => dataObj?.data?.data,
  });

  if (isSuccess) toast.success(data?.data?.message);
  if (isError) toast.error("Please Register and Login First");
  function changeImage(e) {
    setImgSrc(e.target.src);
    setInd(e.target.getAttribute("index"));
  }

  async function getProductDetails() {
    return await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }

  async function getRerlatedProduct() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/?category[in]=${catId}`
      );
      setRelated(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRerlatedProduct();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="pt-15 flex items-center container">
        <div className="w-1/3 pt-16">
          <img
            src={imgSrc ? imgSrc : dataObj?.imageCover}
            className="w-full transition-all"
            alt=""
          />
          <div className="flex flex-wrap">
            {dataObj?.images?.map((image, index) => (
              <img
                src={image}
                index={index}
                onClick={changeImage}
                className={`w-[20%] mx-1 cursor-pointer object-cover ${
                  index == ind
                    ? " border-2 border-main-color opacity-100"
                    : "opacity-50"
                }`}
                key={image}
              />
            ))}
          </div>
        </div>
        <div className="w-2/3 px-8 ">
          <div>
            <h2 className="font-bold py-3">{dataObj?.title}</h2>
          </div>
          <div>
            <p className="colorWhite py-1">{dataObj?.description}</p>
          </div>
          <h1 className="pt-3">{dataObj?.category?.name}</h1>
          <div className="flex justify-between py-3">
            <p className="font-mono font-bold">{dataObj?.price}EGP</p>
            <span>
              {dataObj?.ratingsAverage}{" "}
              <i class="fa-solid fa-star text-rating-color"></i>{" "}
            </span>
          </div>
          <div
            onClick={() => {
              mutate(dataObj?._id);
            }}
            className="btn bg-main-color py-2 d-block mx-auto rounded-lg text-white text-center cursor-pointer"
          >
            add to cart
          </div>
        </div>
      </div>

      <div className="container pt-10">
        <h2 className="text-[2rem] font-bold text-main-color py-4">
          Related Product:
        </h2>
        <div className="flex flex-wrap">
          {Related.length ? (
            Related.map((prod) => (
              <ProductItem key={prod._id} prod={prod}></ProductItem>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
