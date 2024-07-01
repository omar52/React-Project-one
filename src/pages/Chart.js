import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  clearProduct,
  removeProduct,
} from "../store/Slices/counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Chart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.counter.cart);

  return (
    <div>
      <h2 className="text-start mt-4">Cart</h2>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-md-4">Description</div>
          <div className="col-md-2">Quantity</div>
          <div className="col-md-2">Remove</div>
          <div className="col-md-2">Price</div>
        </div>
      </div>
      <hr />
      {Object.values(cart).map((product) => (
        <div key={product.id}>
          <div className="container text-center">
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <img
                  style={{ width: "80px", height: "80px" }}
                  src={product.images}
                  alt="img"
                />
              </div>
              <div className="col-md-2">
                <ButtonGroup className="me-3  " aria-label="Second group">
                  <Button
                    disabled={product.count === 1}
                    className={product.count === 1 ? "btn-secondary" : ""}
                    onClick={() => dispatch(removeProduct(product))}
                  >
                    -
                  </Button>
                  <Button style={{ cursor: "none" }}>{product.count}</Button>{" "}
                  <Button
                    disabled={product.count === product.stock}
                    className={product.count === product.stock ? "btn-secondary" : ""}
                    onClick={() => {
                      dispatch(addProduct(product));
                    }}
                  >
                    +
                  </Button>{" "}
                </ButtonGroup>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon
                  onClick={() => dispatch(clearProduct(product))}
                  icon={faTrash}
                  style={{ color: "#fd7272", cursor: "pointer" }}
                />
              </div>
              <div className="col-md-2">
                ${Math.round(Number(product.price) * Number(product.count))}
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">Total Price:</div>
          <div className="col-md-2">-</div>
          <div className="col-md-2">-</div>
          <div className="col-md-2 border rounded-2">
            ${" "}
            {Math.round(Object.values(cart).reduce(
              (accum, currentProduct) =>
                accum + currentProduct.price * currentProduct.count,
              0
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chart;
