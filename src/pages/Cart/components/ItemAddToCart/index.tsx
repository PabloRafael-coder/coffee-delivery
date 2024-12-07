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
}

export function ItemAddToCart({ coffee }: ItemCartProps) {
  return (
    <ItemContainer>
      <ItemContent>
        <ItemDetails>
          <img src={coffee.image} alt="" />
          <CoffeeDetails>
            <p>{coffee.title}</p>
            <AddOrRemoveItemsCart>
              <CoffeQuantity />
              <RemoveItemButton>
                <Trash />
                Remover
              </RemoveItemButton>
            </AddOrRemoveItemsCart>
          </CoffeeDetails>
        </ItemDetails>
      </ItemContent>
      <p>R$ {coffee.price}</p>
    </ItemContainer>
  );
}
