import styled from 'styled-components';

export const OrderContainer = styled.section`
  width: min(90rem, 100% - 2 * 10rem);
  margin-inline: auto;
  margin-top: 5rem;

  h1 {
    font-size: var(--fs-title-l);
    font-family: var(--ff-sans-baloo);
    color: ${(props) => props.theme['--yellow-dark']};
    font-weight: bold;
  }

  > p {
    font-size: var(--fs-text-l);
    color: ${(props) => props.theme['--base-subtitle']};
  }
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  position: relative;
`;

export const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32.9rem;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  position: relative;
  background: ${(props) => props.theme['--white']};

  &::before {
    content: '';
    position: absolute;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme['--yellow']} 0%,
      ${(props) => props.theme['--purple']} 100%
    );
    border-radius: inherit; /* Mantém o mesmo raio do elemento pai */
    z-index: -1;
    inset: 0; /* Faz com que o pseudo-elemento cubra totalmente o pai */
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
  }

  p {
    color: ${(props) => props.theme['--base-text']};
  }
`;

export const DeliveryStreet = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const DeliveryDetailsBase = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export const BackgroudMapPinContainer = styled(DeliveryDetailsBase)`
  background: ${(props) => props.theme['--purple']};

  > svg {
    color: ${(props) => props.theme['--white']};
  }
`;

export const DeliveryTime = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const BackgroudTimerContainer = styled(DeliveryDetailsBase)`
  background: ${(props) => props.theme['--yellow']};

  > svg {
    color: ${(props) => props.theme['--white']};
  }
`;

export const PaymentType = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const BackgroudCurrencyDollarContainer = styled(DeliveryDetailsBase)`
  background: ${(props) => props.theme['--yellow-dark']};

  > svg {
    color: ${(props) => props.theme['--white']};
  }
`;
