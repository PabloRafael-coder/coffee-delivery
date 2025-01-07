import { createContext, useReducer, type ReactNode } from 'react';
import { cartReducer } from '../reducers/cart/reducer';
import {
  addNewOrderInCartAction,
  decreaseQuantityItemInCartAction,
  increaseQuantityItemInCartAction,
  removeCoffeeCartAction,
} from '../reducers/cart/actions';

export interface CoffeeInCart {
  id: number;
  type: string;
  title: string;
  text: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ObjectCartCoffee {
  coffee: CoffeeInCart;
  quantity: number;
}

interface CoffeeContextType {
  cart: CoffeeInCart[];
  totalQuantityCoffee: number;
  createNewCoffeeOrder: ({ coffee, quantity }: ObjectCartCoffee) => void;
  removeCoffeeCart: (itemId: number) => void;
  increaseQuantityItemInCart: (itemId: number) => void;
  decreaseQuantityItemInCart: (itemId: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalQuantityCoffee = cart.length;

  function createNewCoffeeOrder({ coffee, quantity }: ObjectCartCoffee) {
    dispatch(addNewOrderInCartAction({ coffee, quantity }));
  }

  function increaseQuantityItemInCart(itemId: number) {
    dispatch(increaseQuantityItemInCartAction(itemId));
  }

  function decreaseQuantityItemInCart(itemId: number) {
    dispatch(decreaseQuantityItemInCartAction(itemId));
  }

  function removeCoffeeCart(itemId: number) {
    dispatch(removeCoffeeCartAction(itemId));
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        createNewCoffeeOrder,
        decreaseQuantityItemInCart,
        removeCoffeeCart,
        increaseQuantityItemInCart,
        totalQuantityCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
