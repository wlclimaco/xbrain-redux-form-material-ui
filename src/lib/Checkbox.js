import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';

const CheckboxWithReduxForm = ({ input: { onChange, value, ...inputProps }, meta, ...props }) => (
  <Checkbox
    {...inputProps}
    {...props}
    checked={!!value}
    onChange={(event, isInputChecked) => {
      onChange(event, isInputChecked);
    }}
  />
);

CheckboxWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default CheckboxWithReduxForm;
