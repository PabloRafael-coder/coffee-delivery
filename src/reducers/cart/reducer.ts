import { ActionTypes } from './actions';

export interface CoffeeInCart {
  id: number;
  type: string;
  title: string;
  text: string;
  price: number;
  image: string;
  quantity: number;
}

export function cartReducer(state: CoffeeInCart[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_CART: {
      const isCoffeeInCart = state.find(
        (item) => item.id === action.payload.id,
      );

      if (isCoffeeInCart) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity + item.quantity }
            : item,
        );
      } else {
        return [...state, { ...action.payload }];
      }
    }

    case ActionTypes.INCREASE_QUANTITY_ITEM_IN_CART:
      return state.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    case ActionTypes.DECREASE_QUANTITY_ITEM_IN_CART:
      return state.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      });

    case ActionTypes.REMOVE_COFFEE_CART: {
      const removeCoffeeCart = state.filter((coffee) => {
        return coffee.id !== action.payload.itemId;
      });

      return removeCoffeeCart;
    }

    default:
      return state;
  }
}
