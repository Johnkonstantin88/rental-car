import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarDetails } from '../../redux/cars/operations';
import { selectCarDetails } from '../../redux/cars/selectors';
import DetailsForm from '../../components/DetailsForm/DetailsForm';
import { StyledContainer } from '../../components/SharedLayout/SharedLayout.styled';
import {
  DetailsContentWrapper,
  DetailsImage,
  FormTitle,
  SupportingText,
} from './DetailsPage.styled';
import { StyledFormWrapper } from '../../components/DetailsForm/DetailsForm.styled';
import DetailsTitleBlock from '../../components/DetailsTitleBlock/DetailsTitleBlock';
import CarInfo from '../../components/CarInfo/CarInfo';

const DetailsPage = () => {
  const { id: paramsId } = useParams();
  const carDetails = useSelector(selectCarDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarDetails(paramsId));
  }, [dispatch, paramsId]);

  const { brand, img } = carDetails ?? {};

  return (
    <section>
      <StyledContainer>
        <title>Details</title>
        <DetailsContentWrapper>
          <div>
            <DetailsImage src={img} alt={brand} />
            <StyledFormWrapper>
              <div>
                <FormTitle>Book your car now</FormTitle>
                <SupportingText>
                  Stay connected! We are always ready to help you.
                </SupportingText>
              </div>
              <DetailsForm />
            </StyledFormWrapper>
          </div>
          <div>
            <DetailsTitleBlock {...carDetails} />
            <CarInfo {...carDetails} />
          </div>
        </DetailsContentWrapper>
      </StyledContainer>
    </section>
  );
};

export default DetailsPage;
