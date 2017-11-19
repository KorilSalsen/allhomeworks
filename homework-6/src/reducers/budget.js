import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { MOVE_ORDER_TO_FARM, CREATE_ORDER } from "../actions/marketTypes";

const initialState = {
  profit: 0,
  marketExpanse: 0,
  farmExpanse: 0,
  deliveryExpanse: 0
};

export default function budget(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit
          ? state.profit + action.payload.price
          : action.payload.price,
        marketExpanse: state.marketExpanse ? state.marketExpanse + 20 : 20
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse ? state.farmExpanse + 100 : 100
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse ? state.deliveryExpanse + 20 : 20
      };
    default:
      return state;
  }
}
