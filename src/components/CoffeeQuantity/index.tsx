import { Minus, Plus } from '@phosphor-icons/react';
import { CoffeeQuantityContainer } from './styles';
import { useContext, useState } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import type { CoffeeOptions } from '../../pages/Home';

interface CartalogProps {
  coffees: CoffeeOptions;
}

export function CoffeQuantity({ coffees }: CartalogProps) {
  const { IncreseCoffeeOrder } = useContext(CoffeeContext);
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(0);

  function handleIncreaseQuantityCoffee() {
    setCoffeeQuantity((prevCoffeeQuantity) => prevCoffeeQuantity + 1);
    IncreseCoffeeOrder(coffees.id, coffeeQuantity);
  }

  return (
    <CoffeeQuantityContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <p>{coffeeQuantity}</p>
      <button>
        <Plus size={14} weight="bold" onClick={handleIncreaseQuantityCoffee} />
      </button>
    </CoffeeQuantityContainer>
  );
}
