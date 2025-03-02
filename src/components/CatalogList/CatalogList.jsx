import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import CatalogListItem from '../CatalogListItem/CatalogListItem';
import { StyledList } from './CatalogList.styled';
import CustomButton from '../CustomButton/CustomButton';
import { changeBrandFilter } from '../../redux/filter/slice';

const CatalogList = () => {
  const carsData = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const { page } = filter;

  const { cars, page: dataPage, totalPages } = carsData ?? {};

  useEffect(() => {
    dispatch(fetchCars({ ...filter, page: page }));
  }, [dispatch, page, filter]);

  const onLoadMore = () => {
    dispatch(changeBrandFilter({ ...filter, page: page + 1 }));
  };

  return (
    <>
      <StyledList>
        {cars?.map(car => (
          <li key={car.id}>
            <CatalogListItem car={car} />
          </li>
        ))}
      </StyledList>
      {Number(dataPage) < totalPages && (
        <CustomButton variant="loadMore" type="button" onClick={onLoadMore}>
          Load more
        </CustomButton>
      )}
    </>
  );
};

export default CatalogList;
