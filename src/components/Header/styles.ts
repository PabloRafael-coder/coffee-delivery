import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  width: min(90rem, 100% - 2 * 10rem);
  margin-inline: auto;
  padding-block: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderLocalization = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['--purple-light']};
  font-size: var(--fs-text-s);

  p {
    color: ${(props) => props.theme['--purple-dark']};
  }
`;

export const HeaderLinkLogo = styled(NavLink)`
  margin-right: auto;
`;

export const HeaderLinkCart = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['--yellow-light']};
  color: ${(props) => props.theme['--yellow-dark']};
`;
