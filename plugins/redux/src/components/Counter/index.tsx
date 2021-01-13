import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "@redux/actions";

import { istate } from "@redux/istate";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: istate) => state.counter.count);

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}
