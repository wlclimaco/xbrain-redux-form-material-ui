import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, FormHelperText } from 'material-ui';

const RadioGroupWithReduxForm = ({
  input: { onChange, value, ...inputProps },
  meta: { touched, error },
  ...props
}) => (
  <Fragment>
    <RadioGroup
      {...inputProps}
      {...props}
      value={value}
      onChange={(event, isInputChecked) => {
        onChange(event, isInputChecked);
      }}
    />
    {touched && error && <FormHelperText error>{error}</FormHelperText>}
  </Fragment>
);

RadioGroupWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default RadioGroupWithReduxForm;
