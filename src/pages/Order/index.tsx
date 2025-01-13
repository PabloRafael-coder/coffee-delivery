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
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';

export function Order() {
  const { orders } = useContext(CoffeeContext);

  const pagamentMethod = {
    cash: 'Dinheiro',
    debit: 'Cartão de dédito',
    credit: 'Cartão de crédito',
  };
  return (
    <OrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      {orders.map((order) => {
        return (
          <OrderDetailsContainer key={order.id}>
            <DeliveryDetails>
              <DeliveryStreet>
                <BackgroudMapPinContainer>
                  <MapPin weight="fill" />
                </BackgroudMapPinContainer>
                <div>
                  <p>
                    Entrega na{' '}
                    <strong>
                      {order.street}, {order.number}
                    </strong>
                  </p>
                  <p>
                    {order.neighborhood} - {order.city}, {order.uf}
                  </p>
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
                    <strong>{pagamentMethod[order.pagamentMethod]}</strong>
                  </p>
                </div>
              </PaymentType>
            </DeliveryDetails>
            <img src={illustration} alt="" />
          </OrderDetailsContainer>
        );
      })}
    </OrderContainer>
  );
}
