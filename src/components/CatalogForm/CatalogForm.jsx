import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { fetchBrands } from '../../redux/brands/operations';
import { changeBrandFilter } from '../../redux/filter/slice';
import { selectBrands } from '../../redux/brands/selectors';
import { selectIsLoading } from '../../redux/cars/selectors';
import {
  selectBrandsOptions,
  selectPriceOptions,
} from '../../utils/selectOtions';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomButton from '../CustomButton/CustomButton';
import {
  StyledFieldWrapper,
  StyledForm,
  StyledInputLabel,
  StyledLeftInput,
  StyledLeftInputSpan,
  StyledRightInput,
  StyledRightInputSpan,
} from './CatalogForm.styled';

const CatalogForm = () => {
  const [values, setValues] = useState({
    brand: null,
    rentalPrice: null,
    minMileage: null,
    maxMileage: null,
    limit: 12,
    page: 1,
  });

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const brandsFieldId = useId();
  const rentalPriceFieldId = useId();
  const minMileageFieldId = useId();
  const maxMileageFieldId = useId();

  const selectBrandsInputRef = useRef(null);
  const selectPricewInputRef = useRef(null);

  const resetFilters = () => {
    selectBrandsInputRef.current.setValue('');
    selectPricewInputRef.current.setValue('');
  };

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const { brand, rentalPrice, minMileage, maxMileage, limit, page } = values;

  const handleSelectChange = useCallback(
    e => {
      e.value !== undefined && typeof e.value === 'string'
        ? setValues({ ...values, brand: e.value })
        : setValues({ ...values, rentalPrice: e.value });
    },
    [values]
  );

  const handleInputChange = useCallback(
    e => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (isLoading || (!brand && !rentalPrice && !minMileage && !maxMileage))
      return;

    resetFilters();

    setValues({
      brand: null,
      rentalPrice: null,
      minMileage: null,
      maxMileage: null,
      page: 1,
    });

    dispatch(
      changeBrandFilter({
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit,
        page,
      })
    );

    form.reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldWrapper>
        <StyledInputLabel htmlFor={brandsFieldId}>Car brand</StyledInputLabel>
        <CustomSelect
          variant="brand"
          name="brand"
          id={brandsFieldId}
          placeholder="Choose a brand"
          ref={selectBrandsInputRef}
          isClearable={true}
          selectOptions={selectBrandsOptions(brands)}
          onChange={handleSelectChange}
        />
      </StyledFieldWrapper>

      <StyledFieldWrapper>
        <StyledInputLabel htmlFor={rentalPriceFieldId}>
          Price/ 1 hour
        </StyledInputLabel>
        <CustomSelect
          variant="price"
          name="rentalPrice"
          id={rentalPriceFieldId}
          placeholder="Choose a price"
          ref={selectPricewInputRef}
          isClearable={true}
          selectOptions={selectPriceOptions(120)}
          onChange={handleSelectChange}
        />
      </StyledFieldWrapper>
      <StyledFieldWrapper>
        <StyledInputLabel htmlFor={minMileageFieldId}>
          Сar mileage / km
        </StyledInputLabel>
        <div style={{ position: 'relative' }}>
          <StyledLeftInput
            name="minMileage"
            id={minMileageFieldId}
            type="number"
            min={1000}
            max={10000}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <StyledLeftInputSpan>From</StyledLeftInputSpan>
          <StyledRightInput
            name="maxMileage"
            id={maxMileageFieldId}
            type="number"
            min={1000}
            max={10000}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <StyledRightInputSpan>To</StyledRightInputSpan>
        </div>
      </StyledFieldWrapper>
      <CustomButton variant="search" type="submit">
        Search
      </CustomButton>
    </StyledForm>
  );
};

export default CatalogForm;
