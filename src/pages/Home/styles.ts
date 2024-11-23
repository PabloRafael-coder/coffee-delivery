import styled from 'styled-components';

export const HomeSection = styled.section`
  width: min(90rem, 100% - 2 * 10rem);
  display: flex;
  gap: 4rem;
  margin-inline: auto;
  border: solid 1px black;
  padding-block: 5.75rem;
`;

export const HomeContent = styled.div`
  max-width: 36.75rem;
`;

export const HomeContextText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: var(--fs-title-xl);
    line-height: 130%;
    color: var(--base-title);
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: var(--fs-text-l);
    line-height: 130%;
    color: var(--base-subtitle);
  }
`;

export const ContainerPurchaseBenefits = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 1.25rem 2.5rem;
  max-width: 35.44rem;
  margin-top: 4rem;
`;

export const CoffeeMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: min(90rem, 100% - 2 * 10rem);
  gap: 4rem;
  margin-inline: auto;
  border: solid 1px black;
  padding-block: 1.5rem;

  h2 {
    font-family: var(--ff-sans-baloo);
    font-size: var(--fs-title-l);
  }
`;

export const CoffeeMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem 2.5rem;
`;
