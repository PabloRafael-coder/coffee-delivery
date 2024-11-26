import styled from 'styled-components';

const InputBase = styled.input`
  background: ${(props) => props.theme['--base-input']};
  color: ${(props) => props.theme['--base-label']};
  height: 3rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['--base-button']};
  border-radius: 0.25rem;
  font-size: var(--fs-text-s);
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const InputZipCode = styled(InputBase)`
  max-width: 12.5rem;
`;

export const InputStreet = styled(InputBase)`
  width: 100%;
`;

export const InputComplementContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const InputNumber = styled(InputBase)`
  max-width: 12.5rem;
`;

export const InputComplement = styled(InputBase)`
  width: 100%;
`;

export const InputNeighborhood = styled(InputBase)`
  width: 100%;
`;

export const InputCity = styled(InputBase)`
  width: 100%;
`;

export const InputUF = styled(InputBase)`
  width: 100%;
`;
