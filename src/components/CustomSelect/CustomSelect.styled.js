import Select from 'react-select';
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  .custom-select__control {
    width: ${props => (props.$variant === 'brand' ? '204px' : '196px')};
    height: 44px;
    border: transparent;
    border-radius: 14px;
    padding-left: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 14px;
    font: inherit;
    font-size: 16px;
    font-weight: 500;
    color: var(--dark-main);
    background-color: rgba(247, 247, 251, 1);
    appearance: none;
  }

  .custom-select__control--is-focused {
    border: none;
    box-shadow: none;
  }

  .custom-select__option {
    margin-bottom: 8px;
    color: var(--grey);
    /* background-color: transparent; */
  }

  .custom-select__option--is-selected {
    color: var(--dark-main);
  }

  .custom-select__indicator-separator {
    display: none;
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .custom-select__menu {
    overflow: hidden;
    width: ${props => (props.$variant === 'brand' ? '204px' : '196px')};
    height: ${props => (props.$variant === 'brand' ? '272px' : '188px')};
    margin-top: 4px;
    padding-left: 18px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 8px;
    font-size: 16px;
    background-color: var(--white);
    border-radius: 12px;
    border: 1px solid rgba(247, 247, 247, 1);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    animation: scaleIn var(--primary-transition);
    z-index: 999;
  }

  .custom-select__menu-list {
    width: auto;
    height: ${props => (props.$variant === 'brand' ? '244px' : '160px')};
  }

  .custom-select__menu-list::-webkit-scrollbar {
    width: 8px;
  }

  .custom-select__menu-list::-webkit-scrollbar-track {
    border-top: 12px solid transparent;
    background: transparent;
    background-clip: padding-box;
  }

  .custom-select__menu-list::-webkit-scrollbar-thumb {
    width: 8px;
    height: 128px;
    border-radius: 10px;
    border-top: 12px solid transparent;
    background: rgba(218, 221, 225, 1);
  }
`;
