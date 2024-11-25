import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import {
  AddressDetails,
  CartContainer,
  FormContainer,
  PayDetails,
  PayMethodContainer,
} from './styles';
import { InputText } from './InputText';

export function Cart() {
  return (
    <CartContainer>
      <section>
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
          <div>
            <CurrencyDollar />
            <PayDetails>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </PayDetails>
          </div>
        </PayMethodContainer>
      </section>
    </CartContainer>
  );
}
