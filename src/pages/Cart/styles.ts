import styled from 'styled-components';

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;
  width: min(90rem, 100% - 2 * 10rem);
  margin-inline: auto;
  margin-top: 2.5rem;
  border: solid 1px black;

  h2 {
    font-family: var(--ff-sans-baloo);
    font-size: var(--fs-title-xs);
  }
`;

export const CartContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem;
`;

const StyleBaseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['--base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem;
`;

export const FormContainer = styled(StyleBaseSection)`
  margin-top: 1rem;

  > div {
    display: flex;
    gap: 0.5rem;

    & svg {
      color: ${(props) => props.theme['--yellow-dark']};
      width: 22px;
      height: 22px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const StylesBaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  :nth-child(1) {
    font-size: var(--fs-text-m);
    color: ${(props) => props.theme['--base-subtitle']};
  }

  :nth-child(2) {
    font-size: var(--fs-text-s);
    color: ${(props) => props.theme['--base-text']};
  }
`;

export const AddressDetails = styled(StylesBaseDetails)``;

export const PayDetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PayMethodContainer = styled(StyleBaseSection)`
  & svg {
    color: ${(props) => props.theme['--purple']};
    width: 22px;
    height: 22px;
  }
`;

export const PayDetails = styled(StylesBaseDetails)``;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: ${(props) => props.theme['--base-card']};
    padding: 2.5rem;
    border-radius: 0.375rem 2.75rem;
  }
`;

export const Separator = styled.div`
  border: solid 1px ${(props) => props.theme['--base-button']};
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['--base-text']};
  }

  :nth-of-type(3) {
    font-size: var(--fs-text-l);
    font-weight: bold;
    color: ${(props) => props.theme['--base-subtitle']};
  }
`;

export const ButtonOrderConfirm = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme['--yellow']};
  color: ${(props) => props.theme['--white']};

  text-transform: uppercase;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['--yellow-dark']};
  }
`;
