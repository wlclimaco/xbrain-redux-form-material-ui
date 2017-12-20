import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TextField, FormHelperText } from 'material-ui';

const TextFieldWithReduxForm = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = Boolean(touched && error);
  return (
    <Fragment>
      <TextField error={hasError} {...input} {...props} />
      {hasError && <FormHelperText>{error}</FormHelperText>}
    </Fragment>
  );
};

TextFieldWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};
