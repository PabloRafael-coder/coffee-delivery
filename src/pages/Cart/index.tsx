import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import {
  AddressDetails,
  AsideContainer,
  ButtonOrderConfirm,
  CartContainer,
  CartContent,
  FormContainer,
  OrderSummary,
  PayDetails,
  PayDetailsContainer,
  PayMethodContainer,
  Separator,
} from './styles';
import { InputText } from './components/InputText';
import { SelectPayment } from './components/SelectPaymeny';
import { ItemAddToCart } from './components/ItemAddToCart';
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';

export function Cart() {
  const { coffees, removeCoffeeOrder } = useContext(CoffeeContext);
  return (
    <CartContainer>
      <CartContent>
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <div>
            <MapPinLine />
            <AddressDetails>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressDetails>
          </div>
          <form action="">
            <InputText />
          </form>
        </FormContainer>
        <PayMethodContainer>
          <PayDetailsContainer>
            <CurrencyDollar />
            <PayDetails>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </PayDetails>
          </PayDetailsContainer>
          <SelectPayment />
        </PayMethodContainer>
      </CartContent>
      <AsideContainer>
        <h2>Cafés selecionados</h2>
        <section>
          {coffees.map((coffee) => {
            return (
              <>
                <ItemAddToCart
                  coffee={coffee}
                  removeCoffeeOrder={removeCoffeeOrder}
                />
                <Separator></Separator>
              </>
            );
          })}

          <Separator></Separator>
          <OrderSummary>
            <div>
              <p>Total de Itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>RS 33,20</p>
            </div>
          </OrderSummary>
          <ButtonOrderConfirm>
            <a href="/pedidos">Confirmar pedido</a>
          </ButtonOrderConfirm>
        </section>
      </AsideContainer>
    </CartContainer>
  );
}
