import CustomIcon from '../CustomIcon/CustomIcon';
import {
  DetailsTitleWrapper,
  LocationMileageWrapper,
  StyledCarId,
  StyledDetailsTitle,
  StyledLocation,
  StyledTitleDescription,
  StyledTitlePrice,
} from './DetailsTitleBlock.styled';

const DetailsTitleBlock = ({
  address,
  brand,
  description,
  img,
  mileage,
  model,
  rentalPrice,
  year,
}) => {
  const splittedImg = img?.split('/');
  const carId =
    splittedImg && splittedImg[splittedImg.length - 1].replace('-ai.jpg', '');

  const city = address?.split(',')[1];
  const country = address?.split(',')[2];

  return (
    <DetailsTitleWrapper>
      <StyledDetailsTitle>
        {brand} {model}, {year} <StyledCarId>Id: {carId}</StyledCarId>
      </StyledDetailsTitle>
      <LocationMileageWrapper>
        <StyledLocation>
          <CustomIcon name="icon-location" /> {city}, {country}
        </StyledLocation>
        <p>Mileage: {new Intl.NumberFormat().format(mileage)} km</p>
      </LocationMileageWrapper>
      <StyledTitlePrice>${rentalPrice}</StyledTitlePrice>
      <StyledTitleDescription>{description}</StyledTitleDescription>
    </DetailsTitleWrapper>
  );
};

export default DetailsTitleBlock;
