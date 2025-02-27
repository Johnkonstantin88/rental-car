import styled from 'styled-components';

export const StyledHero = styled.div`
  height: 700px;
  background-image: image-set(
    url('../../assets/Hero_Image.jpg') 1x,
    url('../../assets/Hero_Image@2x.jpg') 2x
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* @media screen and (min-device-pixel-ratio: 2),
    screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url('../../assets/Hero_Image@2x.jpg');
  } */
`;
