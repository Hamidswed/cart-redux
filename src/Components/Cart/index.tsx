import { iteratorSymbol } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  addToCart,
  CartItem,
  removeAll,
  removeFromCart,
} from "../../features/counter/cartSlice";
import { calcTotalPrice } from "../../lib/product";


const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState<number>(0); // why did we use 'useState' for the calculation?
  useEffect(()=>{setTotalPrice(calcTotalPrice(carts))});
  return (
    <div className="overflow-x-auto pt-20 px-40">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Fee</th>
            <th>Count</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item) => (
            <tr className="">
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice}$</td>
              <td>{item.productCount}</td>
              <td>{item.productPrice * item.productCount}$</td>
              <td>
                <div className="flex space-x-2">
                  <button
                    className="btn btn-error"
                    onClick={() => dispatch(removeFromCart(item.productId))}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-square"
                    onClick={() => dispatch(removeAll(item.productId))}
                  >
                    X
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-orange-400 bg-gray-800 text-center">Total Price:  {totalPrice}$</td>
            <button className="bg-[#36D399] w-20 h-12 rounded-br-lg hover:bg-green-500">Pay</button>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Cart;
