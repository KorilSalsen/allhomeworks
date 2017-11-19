import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initialState = {
  orders: []
};

export default function market(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      const updateOrders = state.orders
        ? [...state.orders, action.payload]
        : [action.payload];
      return { ...state, orders: updateOrders };
    case MOVE_ORDER_TO_FARM:
      const orders = state.orders.filter(
        order => order.id !== action.payload.id
      );

      return { ...state, orders };
    default:
      return state;
  }
}
