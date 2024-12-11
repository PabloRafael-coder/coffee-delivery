import { Minus, Plus } from '@phosphor-icons/react';
import { CoffeeQuantityContainer } from './styles';
import { useState } from 'react';

export function CoffeQuantity() {
  const [count, setcount] = useState(0);
  function increaseQuantityCoffee() {
    setcount((prevCount) => prevCount + 1);
  }

  return (
    <CoffeeQuantityContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <p>{count}</p>
      <button>
        <Plus size={14} weight="bold" onClick={increaseQuantityCoffee} />
      </button>
    </CoffeeQuantityContainer>
  );
}
