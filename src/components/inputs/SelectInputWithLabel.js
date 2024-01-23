import React, { useState } from 'react';
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
      <Form.Group controlId={`${id}`} className={classes.customSelect}>
        <Form.Label
          className={
            selectValue !== '' ? classes.labelVisible : classes.labelHidden
          }
        >
          {label}
        </Form.Label>
        <Form.Select defaultValue={selectValue} onChange={handleChange}>
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
