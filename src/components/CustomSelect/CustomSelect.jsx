import { components as SelectComponents } from 'react-select';
import CustomIcon from '../CustomIcon/CustomIcon';
import { StyledSelect } from './CustomSelect.styled';

const CustomSelect = ({
  variant = 'brands',
  placeholder,
  selectOptions,
  menuIsOpen,
  onMenuOpen,
  onMenuClose,
}) => {
  return (
    <StyledSelect
      $variant={variant}
      classNamePrefix="custom-select"
      unstyled
      placeholder={placeholder}
      options={selectOptions}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
      components={{
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
