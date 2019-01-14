import { XVirtualizedSelect } from 'xbrain-react-components';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const ReactSelectWithReduxForm = ({
  input,
  meta: { touched, error },
  ...props
}) => {
  const hasError = Boolean(touched && error);

  return (
    <Fragment>
      <XVirtualizedSelect
        creatable={false}
        error={hasError}
        {...input}
        {...props}
      />
      {hasError && (
        <FormHelperText className="x-error" error>
          {error}
        </FormHelperText>
      )}
    </Fragment>
  );
};

ReactSelectWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default ReactSelectWithReduxForm;
