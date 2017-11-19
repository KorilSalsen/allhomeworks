import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initialState = {
  orders: []
};

export default function farm(state = initialState, action) {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      const orders = state.orders.filter(
        order => order.id !== action.payload.id
      );

      return { ...state, orders };
    case MOVE_ORDER_TO_FARM:
      const updateOrders = state.orders
        ? [...state.orders, action.payload]
        : [action.payload];
      return { ...state, orders: updateOrders };
    default:
      return state;
  }
}
