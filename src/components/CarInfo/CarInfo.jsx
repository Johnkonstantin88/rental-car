import CustomIcon from '../CustomIcon/CustomIcon';
import {
  CarInfoWrapper,
  StyledInfoList,
  StyledInfoListItem,
  StyledInfoSubTitle,
} from './CarInfo.styled';

const CarInfo = ({
  accessories,
  engineSize,
  fuelConsumption,
  functionalities,
  rentalConditions,
  type,
  year,
}) => {
  return (
    <CarInfoWrapper>
      <div>
        <StyledInfoSubTitle>Rental Conditions: </StyledInfoSubTitle>
        <StyledInfoList>
          {rentalConditions?.map((item, idx) => (
            <StyledInfoListItem key={idx}>
              <CustomIcon name="icon-check-circle" />
              <p>{item}</p>
            </StyledInfoListItem>
          ))}
        </StyledInfoList>
      </div>
      <div>
        <StyledInfoSubTitle>Car Specifications:</StyledInfoSubTitle>
        <StyledInfoList>
          <StyledInfoListItem>
            <CustomIcon name="icon-calendar" />
            <p>Year: {year}</p>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <CustomIcon name="icon-car" />
            <p>Type: {type}</p>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <CustomIcon name="icon-fuel-pump" />
            <p>Fuel Consumption: {fuelConsumption}</p>
          </StyledInfoListItem>
          <StyledInfoListItem>
            <CustomIcon name="icon-gear" />
            <p>Engine Size: {engineSize}</p>
          </StyledInfoListItem>
        </StyledInfoList>
      </div>
      <div>
        <StyledInfoSubTitle>
          Accessories and functionalities:
        </StyledInfoSubTitle>
        <StyledInfoList>
          {accessories &&
            functionalities &&
            [...accessories, ...functionalities].map((item, idx) => (
              <StyledInfoListItem key={idx}>
                <CustomIcon name="icon-check-circle" />
                <p>{item}</p>
              </StyledInfoListItem>
            ))}
        </StyledInfoList>
      </div>
    </CarInfoWrapper>
  );
};

export default CarInfo;
