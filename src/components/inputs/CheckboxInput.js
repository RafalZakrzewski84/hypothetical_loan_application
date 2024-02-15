import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Form from 'react-bootstrap/Form';

import styles from './checkboxInputStyles';

const useStyles = createUseStyles(styles);

const CheckboxInput = ({
  formName = '',
  inputId = '',
  label = '',
  inputType = 'checkbox',
  children,
  className,
  name,
  value,
  onChange,
}) => {
  const classes = useStyles();
  const containerClasses = classNames(className);

  return (
    <div className={containerClasses}>
      <div
        className={
          inputType === 'checkbox'
            ? classes.customCheckbox
            : classes.customSwitch
        }
      >
        <Form.Group controlId={`${formName}Checkbox${inputId}`}>
          <Form.Check
            type={inputType}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            defaultChecked={value}
          />
        </Form.Group>
        {children}
      </div>
    </div>
  );
};

export default CheckboxInput;
