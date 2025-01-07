import type { ObjectCartCoffee } from '../../contexts/CoffeeContext';

export enum ActionTypes {
  ADD_NEW_COFFEE_CART = 'ADD_NEW_COFFEE_CART',
  INCREASE_QUANTITY_ITEM_IN_CART = 'INCREASE_QUANTITY_ITEM_IN_CART',
  DECREASE_QUANTITY_ITEM_IN_CART = 'DECREASE_QUANTITY_ITEM_IN_CART',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
}

export function addNewOrderInCartAction({
  coffee,
  quantity,
}: ObjectCartCoffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_CART,
    payload: {
      ...coffee,
      quantity,
    },
  };
}

export function increaseQuantityItemInCartAction(itemId: number) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_ITEM_IN_CART,
    payload: {
      itemId,
    },
  };
}

export function decreaseQuantityItemInCartAction(itemId: number) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_ITEM_IN_CART,
    payload: {
      itemId,
    },
  };
}

export function removeCoffeeCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: {
      itemId,
    },
  };
}
