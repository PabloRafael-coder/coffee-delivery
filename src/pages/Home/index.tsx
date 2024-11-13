import { PurchaseBenefits } from '../../components/PurchaseBenefits';
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react';
import glassImage from '../../assets/Imagem.svg';

import {
  ContainerPurchaseBenefits,
  HomeContainer,
  HomeContent,
  HomeContextText,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <section>
        <HomeContent>
          <HomeContextText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HomeContextText>
          <ContainerPurchaseBenefits>
            <PurchaseBenefits
              Icon={ShoppingCart}
              text="Compra simples e segura"
              variant="yellowDark"
            />
            <PurchaseBenefits
              Icon={Package}
              text="Embalagem mantém o café intacto"
              variant="base"
            />
            <PurchaseBenefits
              Icon={Timer}
              text="Entrega rápida e rastreada"
              variant="yellow"
            />
            <PurchaseBenefits
              Icon={Coffee}
              text="O café chega fresquinho até você"
              variant="purple"
            />
          </ContainerPurchaseBenefits>
        </HomeContent>
        <img src={glassImage} alt="" />
      </section>
    </HomeContainer>
  );
}
