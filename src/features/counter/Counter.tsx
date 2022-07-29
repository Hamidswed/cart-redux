import React from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="mt-10">
      <div>
        <button
          className="btn btn-success text-white"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <span>{count}</span>
        <button
          className="btn btn-warning text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Counter;
