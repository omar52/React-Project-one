import { Button } from "react-bootstrap";

const ProductCard = ({ product , handleNavigate }) => {
  return (
    <div className="card h-100">
      <img src={product.images[0]} className="card-img-top" alt="pic" />
      <div className="card-body text-start">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <Button onClick={() => handleNavigate(product.id)} variant="info">Info</Button>
      </div>
      <div className="text-start card-footer">
        <small className=" text-body-secondary">
          {`price : ${product.price}$`}
        </small>
      </div>
    </div>
  );
};

export default ProductCard;
