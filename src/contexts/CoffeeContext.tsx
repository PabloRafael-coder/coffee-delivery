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

interface CoffeeContextType {
  coffees: Coffee[];
  coffeeQuantity: number;
  coffeeQuantityAdditional?: number;
  createNewCoffeeOrder: (newCoffeeOrder: Coffee) => void;
  removeCoffeeOrder: (removeCoffee: number) => void;
  IncreseCoffeeOrder: (coffeeId: number, coffeeQuantity: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const coffeeQuantity = coffees.length;

  function createNewCoffeeOrder(newCoffeeOrder: Coffee) {
    setCoffees((prevCoffee) => [
      ...prevCoffee,
      { ...newCoffeeOrder, quantity: quantityCoffee },
    ]);
  }

  function IncreseCoffeeOrder(idCoffee: number) {
    setCoffees((coffees) =>
      coffees.map((coffee) => {
        if (coffee.id === idCoffee) {
          return { ...coffee, quantity: coffee.quantity + 1 };
        } else {
          return coffee;
        }
      }),
    );
  }

  function removeCoffeeOrder(removeCoffee: number) {
    const removeCoffeeCart = coffees.filter((coffee) => {
      return coffee.id !== removeCoffee;
    });

    setCoffees(removeCoffeeCart);
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        createNewCoffeeOrder,
        removeCoffeeOrder,
        IncreseCoffeeOrder,
        coffeeQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
