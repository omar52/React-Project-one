import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const ProductCard = ({ product, handleNavigate }) => {
  return (
    <div className="card h-100 border-0 rounded-2 mb-3">
      {product.stock > "0" ? (
        <button
          type="button"
          className="mt-2 ms-3 position-absolute btn btn-success rounded-5"
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

      <img
        src={product.images[0]}
        className="card-img-top img-fluid"
        alt="pic"
        style={{ backgroundColor: "#6c757d21" ,height: "350px" }}
      />
      <hr className="mx-5" />
      <div className="card-body text-start">
        <div className="mb-2 d-flex justify-content-between">
          <h5 className="card-title">{product.title}</h5>
          <small className="fw-bold text-body-secondary">
            {`$${product.price}`}
          </small>
        </div>
        <p className="card-text">{product.description}</p>
        <div className="rate mb-3">
          <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#63E6BE" }} />
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            style={{ color: "#63E6BE" }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <Button onClick={() => handleNavigate(product.id)} variant="info">
            Info
          </Button>
          <Button variant="outline-dark">Add To Chart</Button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
