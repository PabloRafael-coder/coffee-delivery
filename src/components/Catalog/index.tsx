import {
  CartNavigationButton,
  ContainerCoffeeMenu,
  ContainerContentCoffeeMenu,
  ContainerPriceCoffeeMenu,
} from './styles';
import Tradicional from '../../assets/Type=Expresso.svg';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { CoffeQuantity } from '../CoffeeQuantity';

export function Catalog() {
  return (
    <ContainerCoffeeMenu>
      <img src={Tradicional} alt="" />
      <ContainerContentCoffeeMenu>
        <header>Tradicionar</header>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <ContainerPriceCoffeeMenu>
          <p>
            R$ <span>9,90</span>
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
