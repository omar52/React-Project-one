import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../Api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/Slices/counter";

const ProductDetails = () => {
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => setProductDetails(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="product-details">
      <div
        style={{ height: "100vh", maxWidth: "100%" }}
        className="row row-cols-1 row-cols-md-3 g-4  p-5 align-items-start justify-content-center"
      >
        <div className="col-md-5">
          <div className="card border-0 ">
            {productDetails.images && (
              <img
                src={productDetails.images[0]}
                className="card-img-top"
                alt="pic"
                style={{ backgroundColor: "#6c757d21" }}
              />
            )}
          </div>
        </div>
        <div className="col-md-5">
          <div className="card border-0 text-start">
            <div className="first-section">
              <h4>{productDetails.title}</h4>
              <small style={{ fontSize: "10px" }}>
                {productDetails.description}
              </small>
              <div className="rate mb-3">
                <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  style={{ color: "#63E6BE" }}
                />
                <span className="mt-3">(reviews)</span>
              </div>
            </div>
            <hr />
            <div className="second-section">
              <h4>
                ${productDetails.price} or $
                {Math.round(productDetails.price / 12)}/month
              </h4>
              <small style={{ fontSize: "10px" }}>
                Choose Your Best payement Way
              </small>
            </div>
            <hr />
            <div className="third-section">
              <div>
                {productDetails.stock > "0" ? (
                  <button
                    type="button"
                    className="mt-2 ms-3  btn btn-success rounded-5"
                  >
                    In Stock
                  </button>
                ) : (
                  <button
                    type="button"
                    className="mt-2 ms-3 position-absolute btn btn-danger rounded-5"
                  >
                    Out Of Stock
                  </button>
                )}
              </div>
              <p className="mt-3 text-muted">More Info - Related Categories</p>
              <div className="category mt-3 d-flex align-items-center">
                {productDetails.tags?.map((tag, index) => (
                  <Button
                    key={index}
                    className="me-3 mb-2"
                    variant="outline-warning"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            <hr />
            <div className="forth">
              <ButtonGroup className="me-3 " aria-label="Second group">
                <Button onClick={() => dispatch(removeProduct(productDetails))}>
                  -
                </Button>
                <Button style={{ cursor: "none" }}>
                  {cart[productDetails.id]?.count || 0}
                </Button>{" "}
                <Button
                  onClick={() => {
                    dispatch(addProduct(productDetails));
                  }}
                >
                  +
                </Button>{" "}
              </ButtonGroup>
              <p className="lead" style={{ display: "inline-block" }}>
                There are only{" "}
                <span style={{ color: "orange" }}>{productDetails.stock}</span>{" "}
                left in the stock
              </p>
            </div>
            <hr />
            <div className="d-flex justify-content-start row">
              <div className="col text-center mb-2">
                <Button
                  style={{ width: "100%" }}
                  className="rounded-5"
                  variant="dark"
                >
                  Buy Now!
                </Button>
              </div>
              <div className="col text-center">
                <Button
                  style={{ width: "100%" }}
                  className="rounded-5"
                  variant="outline-dark"
                >
                  Add to Chart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
