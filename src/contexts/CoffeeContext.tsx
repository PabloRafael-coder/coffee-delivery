import { createContext, useState, type ReactNode } from 'react';

export interface Coffee {
  id: string;
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
  removeCoffeeOrder: (removeCoffee: string) => void;
  IncreseCoffeeOrder: (itemId: string) => void;
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
    setCart((prevCoffee) => [...prevCoffee, { ...coffee, quantity }]);
  }

  function IncreseCoffeeOrder(itemId: string) {}

  function removeCoffeeOrder(itemId: string) {
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
        removeCoffeeOrder,
        IncreseCoffeeOrder,
        totalQuantityCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
