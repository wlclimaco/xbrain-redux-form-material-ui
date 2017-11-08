import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FormHelperText } from 'material-ui';

const TextFieldWithReduxForm = ({ input, meta: { touched, error }, ...props }) => (
  <div>
    <TextField {...input} {...props} />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </div>
);

TextFieldWithReduxForm.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default TextFieldWithReduxForm;
