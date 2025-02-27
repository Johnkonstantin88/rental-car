import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/brands/operations';
import { fetchCars } from '../../redux/cars/operations';

import { selectCars } from '../../redux/cars/selectors';
import { selectFilter } from '../../redux/filter/selectors';

import CatalogForm from '../../components/CatalogForm/CatalogForm';

const CatalogPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  console.log(cars);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(filter));
  }, [dispatch, filter]);

  return (
    <div>
      <CatalogForm menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
};

export default CatalogPage;
