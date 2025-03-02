import { StyledCustomButton } from './CustomButton.styled';

const CustomButton = ({
  variant = 'main',
  type = 'button',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledCustomButton
      $variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
