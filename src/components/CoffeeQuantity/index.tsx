import { Minus, Plus } from '@phosphor-icons/react';
import { CoffeeQuantityContainer } from './styles';

interface CartalogProps {
  incrementQuantity: () => void;
  decreaseQuantity: () => void;
  quantity: number;
}

export function CoffeQuantity({
  quantity,
  incrementQuantity,
  decreaseQuantity,
}: CartalogProps) {
  return (
    <CoffeeQuantityContainer>
      <button>
        <Minus size={14} weight="bold" onClick={decreaseQuantity} />
      </button>
      <p>{quantity}</p>
      <button>
        <Plus size={14} weight="bold" onClick={incrementQuantity} />
      </button>
    </CoffeeQuantityContainer>
  );
}
