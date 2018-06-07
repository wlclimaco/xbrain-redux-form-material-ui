import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'material-ui';

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
