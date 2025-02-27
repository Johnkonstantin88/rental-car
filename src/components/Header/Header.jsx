import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLink,
  StyledMenu,
} from './Header.styled';
import CustomIcon from '../CustomIcon/CustomIcon';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <CustomIcon name="icon-logo" width={104} height={16} />
        <StyledMenu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </StyledMenu>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
