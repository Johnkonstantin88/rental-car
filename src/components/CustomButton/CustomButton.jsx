import { StyledCustomButton } from './CustomButton.styled';

const CustomButton = ({ variant = 'main', type = 'button', children }) => {
  return (
    <StyledCustomButton $variant={variant} type={type}>
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
