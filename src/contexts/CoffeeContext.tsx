import { createContext, useState, type ReactNode } from 'react';

export interface Coffee {
  id: number;
  type: string;
  title: string;
  text: string;
  price: string;
  image: string;
}

interface CoffeeContextType {
  coffees: Coffee[];
  createNewCoffeeOrder: (newCoffeeOrder: Coffee) => void;
  removeCoffeeOrder: (removeCoffee: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  function createNewCoffeeOrder(newCoffeeOrder: Coffee) {
    setCoffees((prevCoffee) => [...prevCoffee, newCoffeeOrder]);
  }

  function removeCoffeeOrder(removeCoffee: number) {
    const removeCoffeeCart = coffees.filter((coffee) => {
      return coffee.id !== removeCoffee;
    });

    setCoffees(removeCoffeeCart);
  }

  return (
    <CoffeeContext.Provider
      value={{ coffees, createNewCoffeeOrder, removeCoffeeOrder }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
