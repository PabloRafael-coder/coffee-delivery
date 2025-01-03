import { createContext, useReducer, type ReactNode } from 'react';

export interface Coffee {
  id: number;
  type: string;
  title: string;
  text: string;
  price: number;
  image: string;
  quantity: number;
}

interface CatalogProps {
  coffee: Coffee;
  quantity: number;
}

interface CoffeeContextType {
  cart: Coffee[];
  totalQuantityCoffee: number;
  createNewCoffeeOrder: ({ coffee, quantity }: CatalogProps) => void;
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
  const [cart, dispatch] = useReducer((state: Coffee[], action: any) => {
    switch (action.type) {
      case 'ADD_NEW_COFFEE_CART': {
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

      case 'INCREASE_QUANTITY_ITEM_IN_CART':
        return state.map((item) => {
          if (item.id === action.payload.itemId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item };
          }
        });
      case 'DECREASE_QUANTITY_ITEM_IN_CART':
        return state.map((item) => {
          if (item.id === action.payload.itemId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item };
          }
        });

      case 'REMOVE_COFFEE_CART': {
        const removeCoffeeCart = state.filter((coffee) => {
          return coffee.id !== action.payload.itemId;
        });

        return removeCoffeeCart;
      }

      default:
        return state;
    }
  }, []);

  const totalQuantityCoffee = cart.length;

  function createNewCoffeeOrder({ coffee, quantity }: CatalogProps) {
    dispatch({
      type: 'ADD_NEW_COFFEE_CART',
      payload: {
        ...coffee,
        quantity,
      },
    });
  }

  function increaseQuantityItemInCart(itemId: number) {
    dispatch({
      type: 'INCREASE_QUANTITY_ITEM_IN_CART',
      payload: {
        itemId,
      },
    });
  }

  function decreaseQuantityItemInCart(itemId: number) {
    dispatch({
      type: 'DECREASE_QUANTITY_ITEM_IN_CART',
      payload: {
        itemId,
      },
    });
  }

  function removeCoffeeCart(itemId: number) {
    dispatch({
      type: 'REMOVE_COFFEE_CART',
      payload: {
        itemId,
      },
    });
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
