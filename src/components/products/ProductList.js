import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { axiosInstance } from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [ispending, setIsPending] = useState(true);

  const handleNavigate = (id) => {
    navigate(`/product-details/${id}`);
  };

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => setProductList(res.data.products))
      .catch((err) => console.log(err));
    // console.log(productList);

    setIsPending(false);
  }, []);

  return (
    <>
      {ispending && <p>Products Are Loading!!</p>}
      {productList && (
        <div className="text-start mx-5 mt-4">
          <small style={{ maxWidth: "25%" }}>
            Welcome to our shopping website , start browsing{" "}
          </small>
          <hr className="text-center" style={{ maxWidth: "20%" }} />
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-0 p-5">
        {productList.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              product={product}
              handleNavigate={(id) => handleNavigate(id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
