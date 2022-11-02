import { CartItem } from "../../features/counter/cartSlice";
import { cartItemsSample } from "../../lib/product";
import Product from "./Product";


const Products: React.FC = () => {
  
  return (
    <div className="flex m-10">
      {cartItemsSample.map((item: CartItem) => (
        <Product {...item} />
      ))}
    </div>
  );
};
export default Products;
