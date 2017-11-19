import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

export function createOrder(payload) {
  return {
    type: CREATE_ORDER,
    payload
  };
}

export function moveOrderToFarm(payload) {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload
  };
}
