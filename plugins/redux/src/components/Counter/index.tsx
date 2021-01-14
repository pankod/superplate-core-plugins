import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increase, decrease } from "@redux/actions";
import { IState } from "@redux/istate";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: IState) => state.counter.count);

  return (
    <>
      <h2>Counter</h2>
      <button type="button" onClick={() => dispatch(increase())}>
        +
      </button>
      <strong style={{ margin: 10 }}>{count}</strong>
      <button type="button" onClick={() => dispatch(decrease())}>
        -
      </button>
    </>
  );
}
