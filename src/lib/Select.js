import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, FormHelperText } from 'material-ui';

const SelectWithReduxForm = ({
  input: {
    value, onChange, onBlur, name, ...inputProps
  },
  meta: { touched, error },
  label,
  ...rest
}) => {
  const hasError = Boolean(touched && error);
  return (
    <FormControl error={hasError}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        error={hasError}
        value={value}
        {...inputProps}
        {...rest}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onBlur={() => onBlur(value)}
        name={name}
      />
      {hasError && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
};

SelectWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectWithReduxForm;
