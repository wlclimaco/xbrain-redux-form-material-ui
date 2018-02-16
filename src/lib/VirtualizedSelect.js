import { FormHelperText } from 'material-ui';
import { XVirtualizedSelect } from 'xbrain-react-components';
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
    if (value && typeof value === 'string') {
      newValue = value.split(',');
      newValue = newValue.map((item) => {
        if (!isNaN(item)) {
          return parseInt(item, 10);
        }
        return item;
      });
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
      {hasError && <FormHelperText error>{error}</FormHelperText>}
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
