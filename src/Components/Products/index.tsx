import { CartItem } from "../../features/counter/cartSlice";
import Product from "./Product";
import img1 from "./../../Assets/images/p1.jpg";
import img2 from "./../../Assets/images/p2.jpg";
import img3 from "./../../Assets/images/p3.jpg";
import img4 from "./../../Assets/images/p4.jpg";

const Products: React.FC = () => {
  const data: CartItem[] = [
    {
      productId: 1,
      productName: "Wallpaper 1",
      productPrice: 50,
      productImage: img1,
      productCount: 1,
    },
    {
      productId: 2,
      productName: "Wallpaper 2",
      productPrice: 60,
      productImage: img2,
      productCount: 1,
    },
    {
      productId: 3,
      productName: "Wallpaper 3",
      productPrice: 70,
      productImage: img3,
      productCount: 1,
    },
    {
      productId: 4,
      productName: "Wallpaper 4",
      productPrice: 80,
      productImage: img4,
      productCount: 1,
    },
  ];
  return (
    <div className="flex m-10">
      {data.map((item: CartItem) => (
        <Product {...item} />
      ))}
    </div>
  );
};
export default Products;
