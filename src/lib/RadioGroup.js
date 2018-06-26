import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
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
    {touched
      && error && (
        <FormHelperText className="x-error" error>
          {error}
        </FormHelperText>
    )}
  </Fragment>
);

RadioGroupWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default RadioGroupWithReduxForm;
