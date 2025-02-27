import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background-image: image-set(
    url('/static/Hero_Image.jpg') 1x,
    url('/static/Hero_Image@2x.jpg') 2x
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledHomeContainer = styled.div`
  width: 1440px;
  padding-left: 120px;
  padding-right: 120px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledHero = styled.div`
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  height: 700px;
  /* align-items: center; */
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 783px;
  height: 204px;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 1.2;
  text-align: center;
  color: var(--white);
  margin-bottom: 16px;
`;

export const HeroSubTitle = styled.h2`
  /* font-family: var(--main-font-family); */
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  text-align: center;
  color: var(--white);
`;
