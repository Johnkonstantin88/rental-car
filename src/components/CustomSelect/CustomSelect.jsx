import { useState } from 'react';
import { components as SelectComponents } from 'react-select';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StyledSelect } from './CustomSelect.styled';

const Control = ({ getValue, hasValue, children, ...props }) => (
  <SelectComponents.Control {...props}>
    {hasValue && typeof getValue()[0]?.value === 'number' ? (
      <span>{'To $'}</span>
    ) : null}
    {children}
  </SelectComponents.Control>
);

const CustomSelect = ({
  variant = 'brands',
  placeholder,
  selectOptions,
  onChange,
  name,
  value,
  inputValue,
  ref,
  isClearable,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <StyledSelect
      $variant={variant}
      classNamePrefix="custom-select"
      unstyled
      isSearchable={false}
      placeholder={placeholder}
      options={selectOptions}
      name={name}
      value={value}
      inputValue={inputValue}
      onChange={onChange}
      ref={ref}
      isClearable={isClearable}
      onMenuOpen={() => setMenuIsOpen(true)}
      onMenuClose={() => setMenuIsOpen(false)}
      components={{
        Control,
        ClearIndicator: () => null,
        DropdownIndicator: props => (
          <SelectComponents.DropdownIndicator {...props}>
            <CustomIcon
              name={menuIsOpen ? 'icon-chevron_up' : 'icon-chevron_down'}
            />
          </SelectComponents.DropdownIndicator>
        ),
      }}
    />
  );
};

export default CustomSelect;
