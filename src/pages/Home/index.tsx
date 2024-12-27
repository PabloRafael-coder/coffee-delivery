import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  type IconProps,
} from '@phosphor-icons/react';

import {
  CoffeeMenuContainer,
  CoffeeMenuGrid,
  ContainerPurchaseBenefits,
  HomeContent,
  HomeContextText,
  HomeSection,
} from './styles';

import type { ColorVariant } from '../../components/PurchaseBenefits/styles';
import { PurchaseBenefits } from '../../components/PurchaseBenefits';
import glassImage from '../../assets/Imagem.svg';
import { Catalog } from '../Home/components/Catalog';
import { coffees } from '../../../data.json';

interface BenefitsType {
  id: number;
  text: string;
  variant: ColorVariant;
  Icon: React.ComponentType<IconProps>;
}

const purchaseBenefitsData: BenefitsType[] = [
  {
    id: 1,
    text: 'Compra simples e segura',
    variant: 'yellowDark',
    Icon: ShoppingCart,
  },
  {
    id: 2,
    text: 'Embalagem mantém o café intacto',
    variant: 'base',
    Icon: Package,
  },
  {
    id: 3,
    text: 'Entrega rápida e rastreada',
    variant: 'yellow',
    Icon: Timer,
  },
  {
    id: 4,
    text: 'O café chega fresquinho até você',
    variant: 'purple',
    Icon: Coffee,
  },
];

export function Home() {
  return (
    <main>
      <HomeSection>
        <HomeContent>
          <HomeContextText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HomeContextText>
          <ContainerPurchaseBenefits>
            {purchaseBenefitsData.map((benefit) => {
              return (
                <PurchaseBenefits
                  key={benefit.id}
                  text={benefit.text}
                  Icon={benefit.Icon}
                  variant={benefit.variant}
                />
              );
            })}
          </ContainerPurchaseBenefits>
        </HomeContent>
        <img src={glassImage} alt="" />
      </HomeSection>
      <CoffeeMenuContainer>
        <h2>Nossos Cafés</h2>
        <CoffeeMenuGrid>
          {coffees.map((coffee) => {
            return <Catalog key={coffee.id} coffee={coffee} />;
          })}
        </CoffeeMenuGrid>
      </CoffeeMenuContainer>
    </main>
  );
}
