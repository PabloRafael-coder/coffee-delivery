import { PurchaseBenefits } from '../../components/PurchaseBenefits';
import { HomeContainer, HomeContent, HomeContextText } from './styles';

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
          <PurchaseBenefits />
        </HomeContent>
      </section>
    </HomeContainer>
  );
}
