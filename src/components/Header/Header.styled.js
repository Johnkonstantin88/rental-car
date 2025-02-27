import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 68px;
  background-color: var(--badges);
  border-bottom-width: 1px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 4px;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  padding-left: 120px;
  padding-right: 120px;
  margin: 0 auto;
`;

export const StyledMenu = styled.div`
  display: flex;
  gap: 32px;
  width: 136px;
  height: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;

  &.active {
    color: var(--hover-blue);
    text-decoration: none;
  }
`;
