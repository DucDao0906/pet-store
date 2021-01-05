/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from '../types';

const initialState = {
  products: [],
  products_removed: [],
  product: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload.data,
        loading: false,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    default:
      return state;
  }
}
