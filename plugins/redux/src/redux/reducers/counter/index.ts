import { INCREASE, DECREASE } from "@redux/actionTypes";

const initialState = {
    count: 20,
};

export default function Counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                count: state.count + 1,
            };
        case DECREASE:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}
