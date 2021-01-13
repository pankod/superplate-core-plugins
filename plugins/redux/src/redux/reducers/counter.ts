import { INCREMENT, DECREMENT } from "../actionTypes";

const initialState = {
  count: 20,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
