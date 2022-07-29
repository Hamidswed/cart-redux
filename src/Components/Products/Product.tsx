import { CartItem } from "../../features/counter/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./../../features/counter/cartSlice";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";

const Product: React.FC<CartItem> = ({
  productId,
  productName,
  productPrice,
  productImage,
  productCount,
}) => {
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const [storeIndex, setStoreIndex] = useState(-1);
  const [storeCount, setStoreCount] = useState(0);
  useEffect(() => {
    const index = carts.findIndex(function (item: CartItem) {
      return item.productId === productId;
    });
    setStoreIndex(index);
    if (index>=0)
    setStoreCount(carts[index].productCount);
  });
  const add = () => {
    const data: CartItem = {
      productId,
      productName,
      productPrice,
      productImage,
      productCount,
    };
    dispatch(addToCart(data));
  };
  return (
    <div className="flex space-x-4 mx-4 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={productImage} alt="#" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <h2 className="badge badge-secondary">{productPrice}$</h2>
        <div className="card-actions justify-end">
          {storeIndex < 0 ? (
            <button className="btn btn-primary" onClick={add}>
              Buy Now
            </button>
          ) : (
            <div>
              <button
                className="btn btn-error"
                onClick={() => dispatch(removeFromCart(productId))}
              >
                -
              </button>
              <span className="mx-2">{storeCount}</span>
              <button className="btn btn-primary" onClick={add}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
