import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Form from 'react-bootstrap/Form';

import styles from './inputWithLabelStyles';

const useStyles = createUseStyles(styles);

const InputWithLabel = ({
  formName = '',
  inputId = '',
  label = '',
  inputType = 'text',
  className,
  name,
  value,
  onChange,
  isValid,
  error,
  disabled = false,
  readOnly = false,
}) => {
  const classes = useStyles();
  const containerClasses = classNames(className);
  const [inputHasValue, setInputHasValue] = useState(false);

  const id = `${formName}${inputId.replaceAll(' ', '')}`;

  useEffect(() => {
    setInputHasValue(!!value);
  }, [value, setInputHasValue]);

  return (
    <div className={containerClasses}>
      <Form.Group controlId={`${id}`} className={classes.customInput}>
        <Form.Label
          className={inputHasValue ? classes.labelVisible : classes.labelHidden}
        >
          {label}
        </Form.Label>
        <Form.Control
          type={inputType}
          placeholder={label}
          onChange={onChange}
          name={name}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
        />
      </Form.Group>
    </div>
  );
};

export default InputWithLabel;
