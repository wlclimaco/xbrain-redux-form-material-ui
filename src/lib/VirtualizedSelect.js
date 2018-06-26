import { XVirtualizedSelect } from 'xbrain-react-components';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const ReactSelectWithReduxForm = ({
  input: {
    onChange, value, onBlur, ...inputProps
  },
  multiple,
  simpleValue,
  meta: { touched, error },
  ...props
}) => {
  let newValue = value;

  if (multiple && simpleValue) {
    if (typeof value === 'string') {
      if (value) {
        newValue = value.split(',');
        newValue = newValue.map((item) => {
          if (!isNaN(item)) {
            return parseInt(item, 10);
          }
          return item;
        });
      } else {
        newValue = [];
      }
    }
  }

  const hasError = Boolean(touched && error);

  return (
    <Fragment>
      <XVirtualizedSelect
        multiple={multiple}
        value={newValue}
        onChange={onChange}
        onBlur={() => onBlur(newValue)}
        creatable={false}
        error={hasError}
        simpleValue={simpleValue}
        {...inputProps}
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

ReactSelectWithReduxForm.defaultProps = {
  multiple: false,
  simpleValue: true,
};

ReactSelectWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  multiple: PropTypes.bool,
  simpleValue: PropTypes.bool,
};

export default ReactSelectWithReduxForm;
