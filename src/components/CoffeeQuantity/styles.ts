import styled from 'styled-components';

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  background: ${(props) => props.theme['--base-button']};
  border-radius: 6px;
  width: max-content;

  p {
    font-size: var(--fs-text-m);
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme['--purple']};

    &:hover {
      color: ${(props) => props.theme['--purple-dark']};
    }
  }
`;
