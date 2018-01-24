import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText } from 'material-ui';
import { XSelect } from 'xbrain-react-components';

const SelectWithReduxForm = ({
  input: {
    value, onChange, onBlur, name, ...inputProps
  },
  meta: { touched, error },
  label,
  multiple,
  ...rest
}) => {
  const hasError = Boolean(touched && error);

  let newValue = value;
  if (multiple) {
    newValue = Array.isArray(value) ? value : [];
  }

  return (
    <FormControl error={hasError}>
      <XSelect
        label={label}
        name={name}
        multiple={multiple}
        error={hasError}
        value={newValue}
        {...inputProps}
        {...rest}
        onChange={(event) => {
          onChange(event, event.target.value);
        }}
        onBlur={() => onBlur(value)}
      />
      {hasError && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
};

SelectWithReduxForm.defaultProps = {
  multiple: false,
};

SelectWithReduxForm.propTypes = {
  multiple: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectWithReduxForm;
