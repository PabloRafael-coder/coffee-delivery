import styled from 'styled-components';

export const ContainerCoffeeMenu = styled.div`
  position: relative;
  background: var(--base-card);
  max-width: 16rem;
  padding-inline: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 0.375rem 2.25rem;

  img {
    position: absolute;
    top: -20px;
    left: 68px;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const ContainerContentCoffeeMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  gap: 1rem;
  text-align: center;

  header {
    text-transform: uppercase;
    font-weight: bold;
    background: var(--yellow-light);
    color: var(--yellow-dark);
    padding: 0.25rem 0.5rem;
    border-radius: 10rem;
    font-size: 10px;
  }

  & h2 {
    font-size: var(--fs-title-s);
    font-family: var(--ff-sans-baloo);
    color: var(--base-subtitle);
  }

  > p {
    font-size: var(--fs-text-s);
    color: var(--base-label);
  }
`;

export const ContainerPriceCoffeeMenu = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    gap: 0.5rem;
  }

  > p {
    font-size: var(--fs-text-s);
    color: var(--base-text);
    margin-right: 1.5rem;

    & span {
      font-family: var(--ff-sans-baloo);
      font-size: var(--fs-title-m);
      font-weight: 700;
      color: var(--base-text);
    }
  }
`;

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  background: var(--base-button);
  border-radius: 6px;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  svg {
    color: var(--purple);
  }
`;

export const CartNavigationButton = styled.button`
  border: none;
  background: var(--purple-dark);
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background: var(--purple);
  }

  svg {
    color: var(--white);
  }
`;
