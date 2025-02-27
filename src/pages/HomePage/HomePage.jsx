import { NavLink } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import { StyledContainer } from '../../components/SharedLayout/SharedLayout.styled';
import {
  HeroContent,
  HeroSubTitle,
  HeroTitle,
  StyledHero,
  StyledHeroSection,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <StyledHeroSection>
        <StyledContainer>
          <StyledHero>
            <HeroContent>
              <div>
                <HeroTitle>Find your perfect rental car</HeroTitle>
                <HeroSubTitle>
                  Reliable and budget-friendly rentals for any journey
                </HeroSubTitle>
              </div>
              <CustomButton variant="main">
                <NavLink
                  to="/catalog"
                  style={{
                    padding: '12px 88px',
                  }}
                >
                  View Catalog
                </NavLink>
              </CustomButton>
            </HeroContent>
          </StyledHero>
        </StyledContainer>
      </StyledHeroSection>
    </>
  );
};

export default HomePage;
