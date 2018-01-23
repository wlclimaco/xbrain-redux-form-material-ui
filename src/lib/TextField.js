import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TextField, FormHelperText, withStyles } from 'material-ui';
import { hexToRgb } from './util/color';

const styles = theme => ({
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[100]}`,
    fontSize: 16,
    padding: '7px 12px',
    minHeight: 36,
    boxSizing: 'border-box',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem rgba(${hexToRgb(theme.palette.primary.main)}, .25)`,
    },
  },
  textFieldFormLabel: {
    fontSize: theme.typography.pxToRem(18),
  },
});

const TextFieldWithReduxForm = ({
  input,
  meta: { touched, error },
  classes,
  InputProps,
  InputLabelProps,
  ...props
}) => {
  const hasError = Boolean(touched && error);
  return (
    <Fragment>
      <TextField
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
          ...InputProps,
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
          ...InputLabelProps,
        }}
        error={hasError}
        {...input}
        {...props}
      />
      {hasError && <FormHelperText>{error}</FormHelperText>}
    </Fragment>
  );
};

TextFieldWithReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
};

export default withStyles(styles)(TextFieldWithReduxForm);
