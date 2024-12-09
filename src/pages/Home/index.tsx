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

export interface CoffeeOptions {
  id: number;
  type: string;
  title: string;
  text: string;
  price: string;
  image: string;
}

const coffeeOptions: CoffeeOptions[] = [
  {
    id: 1,
    type: 'tradicional',
    title: 'Expresso tradicional',
    text: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    image: 'src/assets/Type=Expresso.svg',
  },
  {
    id: 2,
    type: 'gelado',
    title: 'Expresso Americano',
    text: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    image: 'src/assets/Type=Americano.svg',
  },
  {
    id: 3,
    type: 'tradicional',
    title: 'Expresso Cremoso',
    text: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    image: 'src/assets/Type=Expresso Cremoso.svg',
  },
  {
    id: 4,
    type: 'tradicional',
    title: 'Expresso Gelado',
    text: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    image: 'src/assets/Type=Café Gelado.svg',
  },
  {
    id: 5,
    type: 'tradicional',
    title: 'Café com Leite',
    text: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    image: 'src/assets/Type=Café com Leite.svg',
  },
  {
    id: 6,
    type: 'tradicional',
    title: 'Latte',
    text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    image: 'src/assets/Type=Latte.svg',
  },
  {
    id: 7,
    type: 'tradicional',
    title: 'Capuccino',
    text: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    image: 'src/assets/Type=Capuccino.svg',
  },
  {
    id: 8,
    type: 'tradicional',
    title: 'Macchiato',
    text: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    image: 'src/assets/Type=Macchiato.svg',
  },
  {
    id: 9,
    type: 'tradicional',
    title: 'Mocaccino',
    text: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    image: 'src/assets/Type=Mochaccino.svg',
  },
  {
    id: 10,
    type: 'tradicional',
    title: 'Chocolate Quente',
    text: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    image: 'src/assets/Type=Chocolate Quente.svg',
  },
  {
    id: 11,
    type: 'tradicional',
    title: 'Cubano',
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    image: 'src/assets/Type=Cubano.svg',
  },
  {
    id: 12,
    type: 'especial',
    title: 'Havaiano',
    text: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    image: 'src/assets/Type=Havaiano.svg',
  },
  {
    id: 13,
    type: 'especial',
    title: 'Árabe',
    text: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    image: 'src/assets/Type=Árabe.svg',
  },
  {
    id: 14,
    type: 'especial',
    title: 'Irlandês',
    text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    image: 'src/assets/Type=Irlandês.svg',
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
          {coffeeOptions.map((coffee) => {
            return <Catalog key={coffee.id} coffee={coffee} />;
          })}
        </CoffeeMenuGrid>
      </CoffeeMenuContainer>
    </main>
  );
}
