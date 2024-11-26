import styled from 'styled-components';

export const CartContainer = styled.main`
  width: min(90rem, 100% - 2 * 10rem);
  margin-inline: auto;
  border: solid 1px black;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 40rem;
  }

  h2 {
    font-family: var(--ff-sans-baloo);
    font-size: var(--fs-title-xs);
  }
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

export const PayMethodContainer = styled(StyleBaseSection)`
  > div {
    display: flex;
    gap: 0.5rem;
  }
  & svg {
    color: ${(props) => props.theme['--purple']};
    width: 22px;
    height: 22px;
  }
`;

export const PayDetails = styled(StylesBaseDetails)``;
