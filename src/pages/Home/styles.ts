import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: min(90rem, 100% - 2 * 10rem);
  margin-inline: auto;
  border: solid 1px black;

  section {
    padding-block: 5.75rem;
  }
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
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: var(--fs-text-l);
    line-height: 130%;
  }
`;
