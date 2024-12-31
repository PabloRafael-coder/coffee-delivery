import { CurrencyDollar, MapPinLine, Trash } from '@phosphor-icons/react';
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
} from './styles';

import { SelectPayment } from './components/SelectPaymeny';
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { CoffeQuantity } from '../../components/CoffeeQuantity';
import { coffees } from '../../../data.json';

export function Cart() {
  const {
    cart,
    increaseQuantityItemInCart,
    decreaseQuantityItemInCart,
    removeCoffeeOrder,
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
    removeCoffeeOrder(itemId);
  }

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
            <InputContainer>
              <InputZipCode type="text" placeholder="CEP" />
              <InputStreet type="text" placeholder="Rua" />
              <InputComplementContainer>
                <InputNumber type="text" placeholder="Número" />
                <InputComplement type="text" placeholder="Complemento" />
              </InputComplementContainer>
              <div>
                <InputNeighborhood type="text" placeholder="Bairro" />
                <InputCity type="text" placeholder="Cidade" />
                <InputUF type="text" placeholder="UF" />
              </div>
            </InputContainer>
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
                <p>R${coffee.price}</p>
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
              <p>R${delivery}</p>
            </div>
            <div>
              <p>Total</p>
              <p>R${orderTotal.toFixed(2)}</p>
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
