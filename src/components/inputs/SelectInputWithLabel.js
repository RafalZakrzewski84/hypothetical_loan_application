import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Form from 'react-bootstrap/Form';

import styles from './selectInputWithLabelStyles';

const useStyles = createUseStyles(styles);

const SelectInputWithLabel = ({
  formName = '',
  inputId = '',
  label = '',
  selectOptions = [],
  className,
  name,
  value,
  onChange,
  isValid,
  error,
}) => {
  const classes = useStyles();
  const containerClasses = classNames(className);

  const [selectHasValue, setSelectHasValue] = useState(false);

  const id = `${formName}${inputId.replaceAll(' ', '')}`;

  useEffect(() => {
    setSelectHasValue(!!value);
  }, [value, setSelectHasValue]);

  return (
    <div className={containerClasses}>
      <Form.Group controlId={`${id}`} className={classes.customSelect}>
        <Form.Label
          className={
            selectHasValue ? classes.labelVisible : classes.labelHidden
          }
        >
          {label}
        </Form.Label>
        <Form.Select defaultValue={value} name={name} onChange={onChange}>
          <option value="">{label}</option>
          {selectOptions.length > 0 &&
            selectOptions.map(selectOption => (
              <option
                key={`${formName}${label}${selectOption}`}
                value={selectOption}
              >
                {selectOption}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default SelectInputWithLabel;
