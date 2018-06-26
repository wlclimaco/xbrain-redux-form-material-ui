import { XTextField } from 'xbrain-react-components';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const TextFieldWithReduxForm = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = Boolean(touched && error);
  return (
    <Fragment>
      <XTextField error={hasError} {...input} {...props} />
      {hasError && (
        <FormHelperText dangerouslySetInnerHTML={{ __html: error }} className="x-error" error />
      )}
    </Fragment>
  );
};

TextFieldWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default TextFieldWithReduxForm;
