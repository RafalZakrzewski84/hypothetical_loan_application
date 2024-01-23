import React, { useState } from 'react';
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
}) => {
  const classes = useStyles();
  const containerClasses = classNames(className);

  const [selectValue, setSelectValue] = useState('');

  const id = `${formName}${inputId.replaceAll(' ', '')}`;

  const handleChange = event => {
    setSelectValue(event.target.value);
  };

  return (
    <div className={containerClasses}>
      <Form.Group controlId={`${id}`} className={classes.customInput}>
        <Form.Label
          className={
            selectValue !== '' ? classes.labelVisible : classes.labelHidden
          }
        >
          {label}
        </Form.Label>
        <Form.Control
          type={inputType}
          placeholder={label}
          onChange={handleChange}
        />
      </Form.Group>
    </div>
  );
};

export default InputWithLabel;
