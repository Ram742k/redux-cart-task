import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../cartSlice';


const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="w-75 mx-auto mt-5">
      {items.map((element, index) => (
        <div className="contain px-4" key={index}>
          <div className="row py-4 px-1">
            <div className="col-sm-12 col-lg-8 d-flex flex-wrap">
              <img className="image" src={element.images} alt={element.title} />
              <div className="ms-3 des">
                <h1 className="mb-3">{element.title}</h1>
                <p className="mb-1">{element.description}</p>
                <h5>{element.category}</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex flex-wrap justify-content-between p-3 details">
              <div className="buttons">
                <button
                  className="btn btn-outline-primary fw-bold py-1"
                  onClick={() => dispatch(decreaseQuantity(element.id))}
                >
                  -
                </button>
                <input
                  className="number mx-1 py-1 border-0"
                  type="text"
                  value={element.quantity}
                  readOnly
                />
                <button
                  className="btn btn-outline-primary py-1 fw-bold"
                  onClick={() => dispatch(increaseQuantity(element.id))}
                >
                  +
                </button>
              </div>
              <div className="price">
                <h5 className="mb-5">${element.price.toFixed(2)}</h5>
                <button
                  onClick={() => dispatch(removeItem(element.id))}
                  className="btn btn-outline-danger py-1 mt-5"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Static summary section */}
      <div className="mt-4">
        <div className="row">
          <div className="col-6">
            <h5 className="text-secondary px-1 pb-3">SUBTOTAL:</h5>
          </div>
          <div className="col-6">
            <h5 className="text-end">${totalAmount.toFixed(2)}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h5 className="text-secondary px-1 pb-3">SHIPPING:</h5>
          </div>
          <div className="col-6">
            <h5 className="text-end">FREE</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h5 className="text-dark px-1 pb-3">Total</h5>
          </div>
          <div className="col-6">
            <h5 className="text-end">${totalAmount.toFixed(2)}</h5>
          </div>
        </div>
        <div className="d-flex">
          <div className="ms-auto text-danger mb-5">Get Daily Cash With Nespola Card</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
