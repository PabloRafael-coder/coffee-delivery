import styled from 'styled-components';

export const PaymentButtonContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  background: #e6e5e5;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #574f4d;
  width: 100%;

  &[data-state='true'] {
    background-color: ${(props) => props.theme['--purple-light']};
    border: 2px solid ${(props) => props.theme['--purple']};
  }

  &:hover {
    background: ${(props) => props.theme['--base-hover']};
  }

  input {
    display: none;
  }
`;
