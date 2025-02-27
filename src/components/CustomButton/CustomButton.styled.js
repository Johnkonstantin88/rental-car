import styled from 'styled-components';

export const StyledCustomButton = styled.button`
  ${props => {
    switch (props.$variant) {
      case 'main':
        return `
        width: 276px;
        height: 44px;
        border-radius: 12px;
        font-family: Manrope;
        font-weight: 600;
        font-size: 16px;
        color: var(--white);
        background-color: var(--blue);
        transition: var(--primary-transition);
        &:hover {
            background-color: var(--hover-blue);
        }
        `;

      default:
        return `
        `;
    }
  }}
`;
