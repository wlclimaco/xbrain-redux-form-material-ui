import { RadioGroup, FormHelperText } from 'material-ui';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import toString from '../utils/toString';

const RadioGroupWithReduxForm = ({
  input: { onChange, value, ...inputProps },
  meta: { touched, error },
  ...props
}) => (
  <Fragment>
    <RadioGroup
      {...inputProps}
      {...props}
      value={toString(value)}
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
