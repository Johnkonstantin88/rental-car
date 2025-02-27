import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrand } from '../../redux/filter/slice';
import { selectBrands } from '../../redux/brands/selectors';
import CustomSelect from '../CustomSelect/CustomSelect';

const CatalogForm = ({ menuIsOpen, setMenuIsOpen }) => {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();

  const selectBrandsOptions = () => {
    return brands?.map(brand => ({
      value: brand.toLowerCase(),
      label: brand,
    }));
  };

  const selectPriceOptions = value => {
    const arr = [];

    for (let i = 30; i <= value; i += 10) {
      arr.push({ value: i, label: i });
    }

    return arr;
  };

  const handleChange = e => {
    dispatch(changeBrand(e.value));
  };

  return (
    <Formik>
      <Form>
        <CustomSelect
          variant="brands"
          placeholder="Choose a brand"
          selectOptions={selectBrandsOptions()}
          onChange={handleChange}
          menuIsOpen={menuIsOpen}
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
        />
        <CustomSelect
          variant="price"
          placeholder="Choose a price"
          selectOptions={selectPriceOptions(120)}
          onChange={handleChange}
          menuIsOpen={menuIsOpen}
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
        />
      </Form>
    </Formik>
  );
};

export default CatalogForm;
