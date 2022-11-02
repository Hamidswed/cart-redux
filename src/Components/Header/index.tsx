import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { calcTotalPrice } from "../../lib/product";

const Header: React.FC = () => {
  const carts = useSelector((state: RootState) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(calcTotalPrice(carts));
  });

  return (
    <div className="navbar bg-base-100">
      <div className="w-[20%]">
        <a href="#" className="btn btn-ghost normal-case text-xl">
          Pixtore
        </a>
      </div>
      <div className="w-[60%] normal-case text-base text-gray-500 space-x-8 justify-center">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:text-[#4506CB]"
        >
          Home
        </Link>
        <Link
          to="/store"
          className="transition duration-300 ease-in-out hover:text-[#4506CB]"
        >
          Store
        </Link>
        <Link
          to="/about"
          className="transition duration-300 ease-in-out hover:text-[#4506CB]"
        >
          About
        </Link>
      </div>
      <div className="flex w-[20%] justify-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {carts.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{carts.length} Items</span>
              <span className="text-info">Subtotal: {totalPrice}</span>
              <div className="card-actions">
                <Link to="/cartview">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
