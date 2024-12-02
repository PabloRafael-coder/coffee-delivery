import {
  BackgroudCurrencyDollarContainer,
  BackgroudMapPinContainer,
  BackgroudTimerContainer,
  DeliveryDetails,
  DeliveryStreet,
  DeliveryTime,
  OrderContainer,
  OrderDetailsContainer,
  PaymentType,
} from './styles';

import illustration from '../../assets/Illustration.svg';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

export function Order() {
  return (
    <OrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <OrderDetailsContainer>
        <DeliveryDetails>
          <DeliveryStreet>
            <BackgroudMapPinContainer>
              <MapPin weight="fill" />
            </BackgroudMapPinContainer>
            <div>
              <p>
                Entrega em <strong>Rua joão Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto alegre, RS</p>
            </div>
          </DeliveryStreet>
          <DeliveryTime>
            <BackgroudTimerContainer>
              <Timer weight="fill" />
            </BackgroudTimerContainer>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </DeliveryTime>
          <PaymentType>
            <BackgroudCurrencyDollarContainer>
              <CurrencyDollar />
            </BackgroudCurrencyDollarContainer>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de crédito</strong>
              </p>
            </div>
          </PaymentType>
        </DeliveryDetails>
        <img src={illustration} alt="" />
      </OrderDetailsContainer>
    </OrderContainer>
  );
}
