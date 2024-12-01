import { Minus, Plus } from '@phosphor-icons/react';
import { CoffeeQuantityContainer } from './styles';

export function CoffeQuantity() {
  return (
    <CoffeeQuantityContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <p>1</p>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </CoffeeQuantityContainer>
  );
}
