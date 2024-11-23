import {
  CartNavigationButton,
  CoffeeQuantityContainer,
  ContainerCoffeeMenu,
  ContainerContentCoffeeMenu,
  ContainerPriceCoffeeMenu,
} from './styles';
import Tradicional from '../../assets/Type=Expresso.svg';
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react';

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
            <CoffeeQuantityContainer>
              <button>
                <Minus size={14} weight="bold" />
              </button>
              <p>1</p>
              <button>
                <Plus size={14} weight="bold" />
              </button>
            </CoffeeQuantityContainer>
            <CartNavigationButton>
              <ShoppingCartSimple size={22} weight="fill" />
            </CartNavigationButton>
          </div>
        </ContainerPriceCoffeeMenu>
      </ContainerContentCoffeeMenu>
    </ContainerCoffeeMenu>
  );
}
