import { Bank, CreditCard, Money } from '@phosphor-icons/react';
import { PaymentButtonContainer } from './styles';

export function SelectPayment() {
  return (
    <PaymentButtonContainer>
      <button>
        <CreditCard /> Cartão de crédito
      </button>
      <button>
        <Bank />
        Cartão de débito
      </button>
      <button>
        <Money />
        Dinheiro
      </button>
    </PaymentButtonContainer>
  );
}
