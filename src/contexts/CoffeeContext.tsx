import { createContext, useState, type ReactNode } from 'react';

export interface Coffee {
  id: number;
  type: string;
  title: string;
  text: string;
  price: string;
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
  removeCoffeeOrder: (removeCoffee: number) => void;
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
  const [cart, setCart] = useState<Coffee[]>([]);
  const totalQuantityCoffee = cart.length;

  function createNewCoffeeOrder({ coffee, quantity }: CatalogProps) {
    // setCart((prevCoffee) => [...prevCoffee, { ...coffee, quantity }]);

    setCart((state) => {
      const isCoffeeInCart = state.find((item) => item.id === coffee.id);

      if (isCoffeeInCart) {
        return state.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...state, { ...coffee, quantity }];
      }
    });
  }

  function increaseQuantityItemInCart(itemId: number) {
    setCart((state) =>
      state.map((coffee) => {
        if (coffee.quantity < 20 && coffee.id === itemId) {
          return { ...coffee, quantity: coffee.quantity + 1 };
        }

        return { ...coffee };
      }),
    );
  }

  function decreaseQuantityItemInCart(itemId: number) {
    setCart((state) =>
      state.map((coffee) => {
        if (coffee.quantity > 1 && coffee.id === itemId) {
          return { ...coffee, quantity: coffee.quantity - 1 };
        }

        return { ...coffee };
      }),
    );
  }

  function removeCoffeeOrder(itemId: number) {
    const removeCoffeeCart = cart.filter((coffee) => {
      return coffee.id !== itemId;
    });
    setCart(removeCoffeeCart);
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        createNewCoffeeOrder,
        decreaseQuantityItemInCart,
        removeCoffeeOrder,
        increaseQuantityItemInCart,
        totalQuantityCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
