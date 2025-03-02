import { useDispatch, useSelector } from 'react-redux';
import { selectFavourite } from '../../redux/favourite/selectors';
import { addFavourite, removeFavoirite } from '../../redux/favourite/slice';
import CustomButton from '../CustomButton/CustomButton';
import CustomIcon from '../CustomIcon/CustomIcon';
import {
  StyledDescription,
  StyledDescriptionWrapper,
  StyledIconWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledItemWrapper,
  StyledPrice,
  StyledSubTitle,
  StyledSubTitleWrapper,
} from './CatalogListItem.styled';
import { NavLink } from 'react-router-dom';

const CatalogListItem = ({ car }) => {
  const dispatch = useDispatch();
  const favourite = useSelector(selectFavourite);

  const {
    address,
    brand,
    img,
    id,
    model,
    mileage,
    rentalCompany,
    rentalPrice,
    type,
    year,
  } = car;

  const isFavorite = favourite?.find(item => item.id === id) ? true : false;

  const handleClickFavourite = () => {
    isFavorite ? dispatch(removeFavoirite(car)) : dispatch(addFavourite(car));
  };

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  return (
    <StyledItemWrapper>
      <StyledImageWrapper>
        <StyledImage src={img} alt={brand} loading="lazy" />
        <StyledIconWrapper onClick={handleClickFavourite}>
          <CustomIcon
            name={isFavorite ? 'icon-heart_active' : 'icon-heart_default'}
            width={16}
            height={15}
          />
        </StyledIconWrapper>
      </StyledImageWrapper>
      <StyledSubTitleWrapper>
        <StyledSubTitle>
          {brand}&nbsp;
          <span style={{ color: '#3470FF' }}>{model}</span>,&nbsp;
          {year}
        </StyledSubTitle>
        <StyledPrice>${rentalPrice}</StyledPrice>
      </StyledSubTitleWrapper>
      <StyledDescriptionWrapper>
        <StyledDescription>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
        </StyledDescription>
        <StyledDescription>
          <li>{type}</li>
          <li>{mileage}</li>
        </StyledDescription>
      </StyledDescriptionWrapper>
      <CustomButton type="button">
        <NavLink
          to={`/catalog/${id}`}
          style={{
            padding: '12px 88px',
          }}
        >
          Read more
        </NavLink>
      </CustomButton>
    </StyledItemWrapper>
  );
};

export default CatalogListItem;
