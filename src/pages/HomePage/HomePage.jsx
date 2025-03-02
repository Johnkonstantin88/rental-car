import { NavLink } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  HeroContent,
  HeroSubTitle,
  HeroTitle,
  StyledHero,
  StyledHeroSection,
  StyledHomeContainer,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <StyledHeroSection>
        <StyledHomeContainer>
          <StyledHero>
            <HeroContent>
              <div>
                <title>Home</title>
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
        </StyledHomeContainer>
      </StyledHeroSection>
    </>
  );
};

export default HomePage;
