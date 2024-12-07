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

  return (
    <CoffeeContext.Provider value={{ coffees, createNewCoffeeOrder }}>
      {children}
    </CoffeeContext.Provider>
  );
}
