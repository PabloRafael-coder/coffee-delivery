import { Trash } from '@phosphor-icons/react';
import { CoffeQuantity } from '../../../../components/CoffeeQuantity';
import expresso from '../../../../assets/Type=Expresso.svg';
import {
  AddOrRemoveItemsCart,
  CoffeeDetails,
  ItemContainer,
  ItemContent,
  ItemDetails,
  RemoveItemButton,
} from './styles';

export function ItemAddToCart() {
  return (
    <ItemContainer>
      <ItemContent>
        <ItemDetails>
          <img src={expresso} alt="" />
          <CoffeeDetails>
            <p>Expresso Tradicional</p>
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
      <p>R$ 9,90</p>
    </ItemContainer>
  );
}
