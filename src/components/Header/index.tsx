import logo from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import {
  CoffeeQuantity,
  HeaderContainer,
  HeaderContent,
  HeaderLinkCart,
  HeaderLinkLogo,
  HeaderLocalization,
} from './styles';
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';

export function Header() {
  const { totalQuantityCoffee } = useContext(CoffeeContext);

  return (
    <HeaderContainer>
      <HeaderLinkLogo to="/">
        <img src={logo} alt="" />
      </HeaderLinkLogo>
      <HeaderContent>
        <HeaderLocalization>
          <MapPin size={22} color="#8047f8" weight="fill" />
          <p>São Paulo, SP</p>
        </HeaderLocalization>
        <HeaderLinkCart to="/carrinho">
          <ShoppingCart size={22} weight="fill" />
          {totalQuantityCoffee > 0 && (
            <CoffeeQuantity>{totalQuantityCoffee}</CoffeeQuantity>
          )}
        </HeaderLinkCart>
      </HeaderContent>
    </HeaderContainer>
  );
}
