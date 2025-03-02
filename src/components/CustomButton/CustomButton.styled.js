import styled from 'styled-components';

export const StyledCustomButton = styled.button`
  font-family: Manrope;
  font-weight: 600;
  font-size: 16px;
  height: 44px;
  border-radius: 12px;

  ${props => {
    switch (props.$variant) {
      case 'main':
        return `
        width: 276px;
        color: var(--white);
        background-color: var(--blue);
        transition: var(--primary-transition);
        &:hover {
            background-color: var(--hover-blue);
        }
        `;
      case 'search':
        return `
        width: 156px;
        color: var(--white);
        background-color: var(--blue);
        transition: var(--primary-transition);
        &:hover {
            background-color: var(--hover-blue);
        `;

      case 'loadMore':
        return `
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 156px;
        border: 1px solid var(--blue);
        color: var(--main);
        background-color: transparent;
        &:hover {
            border-color: var(--hover-blue);
        `;

      default:
        return `
        `;
    }
  }}
`;
