import {
  CartNavigationButton,
  ContainerCoffeeMenu,
  ContainerContentCoffeeMenu,
  ContainerPriceCoffeeMenu,
} from './styles';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { CoffeQuantity } from '../../../../components/CoffeeQuantity';
import type { CoffeeOptions } from '../..';

interface CoffeeProps {
  coffee: CoffeeOptions;
}

export function Catalog({ coffee }: CoffeeProps) {
  return (
    <ContainerCoffeeMenu>
      <img src={coffee.image} alt="" />
      <ContainerContentCoffeeMenu>
        <header>{coffee.type}</header>
        <h2>{coffee.title}</h2>
        <p>{coffee.text}</p>
        <ContainerPriceCoffeeMenu>
          <p>
            R$ <span>{coffee.price}</span>
          </p>
          <div>
            <CoffeQuantity />
            <CartNavigationButton>
              <ShoppingCartSimple size={22} weight="fill" />
            </CartNavigationButton>
          </div>
        </ContainerPriceCoffeeMenu>
      </ContainerContentCoffeeMenu>
    </ContainerCoffeeMenu>
  );
}
