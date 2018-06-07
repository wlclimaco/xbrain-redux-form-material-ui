import { FormHelperText } from 'material-ui';
import { XDropZone } from 'xbrain-react-components';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const DropZoneWithReduxForm = ({
  input: { onChange, onDrop, ...inputProps },
  meta: { touched, error },
  ...props
}) => {
  const hasError = Boolean(touched && error);

  return (
    <Fragment>
      <XDropZone
        onChange={(acceptedFiles) => {
          onChange(acceptedFiles);
        }}
        error={hasError}
        {...inputProps}
        {...props}
      />
      {hasError && <FormHelperText className="x-error" error>{error}</FormHelperText>}
    </Fragment>
  );
};

DropZoneWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default DropZoneWithReduxForm;
