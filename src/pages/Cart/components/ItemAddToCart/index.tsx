import { Trash } from '@phosphor-icons/react';
import { CoffeQuantity } from '../../../../components/CoffeeQuantity';
import {
  AddOrRemoveItemsCart,
  CoffeeDetails,
  ItemContainer,
  ItemContent,
  ItemDetails,
  RemoveItemButton,
} from './styles';
import type { Coffee } from '../../../../contexts/CoffeeContext';

interface ItemCartProps {
  coffee: Coffee;
  removeCoffeeOrder: (removeCoffee: number) => void;
}

export function ItemAddToCart({ coffee, removeCoffeeOrder }: ItemCartProps) {
  function handleRemoveCoffeeOrder() {
    removeCoffeeOrder(coffee.id);
  }

  return (
    <ItemContainer>
      <ItemContent>
        <ItemDetails>
          <img src={coffee.image} alt="" />
          <CoffeeDetails>
            <p>{coffee.title}</p>
            <AddOrRemoveItemsCart>
              <CoffeQuantity key={coffee.id} coffees={coffee} />
              <RemoveItemButton onClick={handleRemoveCoffeeOrder}>
                <Trash />
                Remover
              </RemoveItemButton>
            </AddOrRemoveItemsCart>
          </CoffeeDetails>
        </ItemDetails>
      </ItemContent>
      <p>R${coffee.price}</p>
    </ItemContainer>
  );
}
