import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormHelperText } from 'material-ui';
import { XTextField } from 'xbrain-react-components';

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
