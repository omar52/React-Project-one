import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../Api/Api";

const ProductDetails = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [arr, setArr] = useState([]);
  console.log(arr);
  // console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => setProductDetails(res.data))
      .catch((err) => console.log(err));
    console.log(productDetails);
    //   setArr(productDetails.images);
    //   console.log(arr.length);
    console.log(productDetails.images);
  }, []);

  return (
    <div className="product-details">
      <div style={{height:"100vh"}} className="row row-cols-1 row-cols-md-3 g-4  p-5 align-items-center">
        <div  className="col-md-6" key={productDetails.id}>
          <div className="card ">
            {productDetails.images && <img
              src={productDetails.images[0]}
              className="card-img-top"
              alt="pic"
            />}
            <div className="card-body text-start">
              <h5 className="card-title">{productDetails.title}</h5>
              <p className="card-text">{productDetails.description}</p>
            </div>
            <div className="text-start card-footer">
              <small className=" text-body-secondary">
                {`price : ${productDetails.price}$`}
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-4" key={productDetails.id}>
          <div className="card ">
            {productDetails.images && <img
              src={productDetails.images[0]}
              className="card-img-top"
              alt="pic"
            />}
            <div className="card-body text-start">
              <h5 className="card-title">{productDetails.title}</h5>
              <p className="card-text">{productDetails.description}</p>
            </div>
            <div className="text-start card-footer">
              <small className=" text-body-secondary">
                {`price : ${productDetails.price}$`}
              </small>
            </div>
          </div>
        </div>
      </div>
      .
    </div>
  );
};

export default ProductDetails;
