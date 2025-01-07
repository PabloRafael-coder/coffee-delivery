import styled from 'styled-components';

export const PaymentButtonContainer = styled.label`
  display: flex;
  gap: 0.75rem;

  &[data-state='true'] {
    background-color: ${(props) => props.theme['--purple-light']};
    border: 2px solid ${(props) => props.theme['--purple']};
  }

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    height: 3.18rem;
    border: 2px solid transparent;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['--base-button']};
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme['--base-text']};
    cursor: pointer;
    width: 100%;

    svg {
      width: 1rem;
      height: 1rem;
    }

    &:hover {
      background: ${(props) => props.theme['--base-hover']};
    }

    &:focus {
    }
  }
`;
