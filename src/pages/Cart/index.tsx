import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
  CurrencyDollar,
  MapPinLine,
  Trash,
  Bank,
  CreditCard,
  Money,
} from '@phosphor-icons/react';
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
  AddOrRemoveItemsCart,
  CoffeeDetails,
  ItemContainer,
  ItemContent,
  ItemDetails,
  RemoveItemButton,
  InputZipCode,
  InputContainer,
  InputStreet,
  InputComplementContainer,
  InputNumber,
  InputComplement,
  InputNeighborhood,
  InputCity,
  InputUF,
  PaymentOptions,
} from './styles';

import { Radio } from './components/Radio';
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { CoffeQuantity } from '../../components/CoffeeQuantity';
import { coffees } from '../../../data.json';

interface FormInputs {
  city: string;
  complement: string;
  neighborhood: string;
  number: number;
  street: string;
  uf: string;
  zipCode: string;
  pagamentMethod: 'credit' | 'debit' | 'cash';
}

const newOrderFormValidationSchema = zod.object({
  city: zod.string().min(1, 'informe o nome da sua cidade'),
  complement: zod.string().min(1),
  neighborhood: zod.string().min(1),
  number: zod.number().min(1),
  street: zod.string().min(1),
  uf: zod.string().min(1).max(2),
  zipCode: zod.string().min(8).max(9),
  pagamentMethod: zod.string(),
});

export function Cart() {
  const { register, handleSubmit, watch } = useForm<FormInputs>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const isPaymentMethod = watch('pagamentMethod');

  const {
    cart,
    increaseQuantityItemInCart,
    decreaseQuantityItemInCart,
    removeCoffeeCart,
  } = useContext(CoffeeContext);

  const cartInCoffee = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Item não existe');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalValueInCart = cart.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.quantity * valorAtual.price;
  }, 0);

  const delivery = 3.5;

  const orderTotal = delivery + totalValueInCart;

  function handleIncreaseCoffeeQuantity(itemId: number) {
    increaseQuantityItemInCart(itemId);
  }

  function handleDecreaseCoffeeQuantity(itemId: number) {
    decreaseQuantityItemInCart(itemId);
  }

  function handleRemoveCoffeeCart(itemId: number) {
    removeCoffeeCart(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

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
          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <InputContainer>
              <InputZipCode
                {...register('zipCode')}
                type="text"
                placeholder="CEP"
              />
              <InputStreet
                {...register('street')}
                type="text"
                placeholder="Rua"
              />
              <InputComplementContainer>
                <InputNumber
                  {...register('number', { valueAsNumber: true })}
                  type="text"
                  placeholder="Número"
                />
                <InputComplement
                  {...register('complement')}
                  type="text"
                  placeholder="Complemento"
                />
              </InputComplementContainer>
              <div>
                <InputNeighborhood
                  {...register('neighborhood')}
                  type="text"
                  placeholder="Bairro"
                />
                <InputCity
                  {...register('city')}
                  type="text"
                  placeholder="Cidade"
                />
                <InputUF {...register('uf')} type="text" placeholder="UF" />
              </div>
            </InputContainer>
          </form>
        </FormContainer>
        <PayMethodContainer>
          <PayDetailsContainer>
            <CurrencyDollar size={22} />
            <PayDetails>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </PayDetails>
          </PayDetailsContainer>
          <PaymentOptions>
            <Radio
              isSelected={isPaymentMethod === 'credit'}
              {...register('pagamentMethod')}
              value="credit"
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>
            <Radio
              isSelected={isPaymentMethod === 'debit'}
              {...register('pagamentMethod')}
              value="debit"
            >
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>
            <Radio
              isSelected={isPaymentMethod === 'cash'}
              {...register('pagamentMethod')}
              value="cash"
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </PaymentOptions>
        </PayMethodContainer>
      </CartContent>
      <AsideContainer>
        <h2>Cafés selecionados</h2>
        <section>
          {cartInCoffee.map((coffee) => {
            return (
              <ItemContainer key={coffee.id}>
                <ItemContent>
                  <ItemDetails>
                    <img src={coffee.image} alt="" />
                    <CoffeeDetails>
                      <p>{coffee.title}</p>
                      <AddOrRemoveItemsCart>
                        <CoffeQuantity
                          quantity={coffee.quantity}
                          incrementQuantity={() =>
                            handleIncreaseCoffeeQuantity(coffee.id)
                          }
                          decreaseQuantity={() =>
                            handleDecreaseCoffeeQuantity(coffee.id)
                          }
                        />
                        <RemoveItemButton
                          onClick={() => handleRemoveCoffeeCart(coffee.id)}
                        >
                          <Trash />
                          Remover
                        </RemoveItemButton>
                      </AddOrRemoveItemsCart>
                    </CoffeeDetails>
                  </ItemDetails>
                </ItemContent>
                <p>R${coffee.price.toFixed(2)}</p>
              </ItemContainer>
            );
          })}
          <Separator></Separator>
          <OrderSummary>
            <div>
              <p>Total de Itens</p>
              <p>R${totalValueInCart.toFixed(2)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R${delivery.toFixed(2)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>R${orderTotal.toFixed(2)}</p>
            </div>
          </OrderSummary>
          <ButtonOrderConfirm type="submit" form="order">
            <a href="/pedidos">Confirmar pedido</a>
          </ButtonOrderConfirm>
        </section>
      </AsideContainer>
    </CartContainer>
  );
}
