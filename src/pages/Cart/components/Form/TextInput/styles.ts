import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background: ${(props) => props.theme['--base-input']};
    color: ${(props) => props.theme['--base-label']};
    height: 3rem;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['--base-button']};
    border-radius: 0.25rem;
    font-size: var(--fs-text-s);
    outline: none;
  }

  span {
    color: red;
    font-size: 0.875rem;
  }
`;
