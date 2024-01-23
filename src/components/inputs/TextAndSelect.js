import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './textAndSelectStyles';

const useStyles = createUseStyles(styles);

const TextAndSelect = ({ label, id, options, optionsUnit, className }) => {
  const classes = useStyles();
  const containerClasses = classNames(className);
  const [isDatalistOpen, setIsDatalistOpen] = useState(false);

  const handleSelectChange = event => {
    const inputNewValue = parseInt(event.target.value, 10);
    const input = document.getElementById(`input${id}`);
    input.value = inputNewValue;
  };

  const handleOnFocus = () => {
    setIsDatalistOpen(false);
    const input = document.getElementById(`input${id}`);
    input.value = '';
  };

  const handleOnBlur = () => {
    const input = document.getElementById(`input${id}`);
    const inputValue = parseInt(input.value, 10);
    const MIN_VALUE = options[0];
    const MAX_VALUE = options[options.length - 1];

    if (isNaN(inputValue)) {
      input.value = MIN_VALUE + optionsUnit; // Set to the minimum value
    } else {
      const clampedValue = Math.min(Math.max(inputValue, MIN_VALUE), MAX_VALUE);
      input.value = clampedValue + optionsUnit;
    }
  };

  const handleOpenDatalist = () => {
    setIsDatalistOpen(!isDatalistOpen);
  };

  const handleOptionSelect = option => {
    const input = document.getElementById(`input${id}`);
    input.value = option + optionsUnit;
    setIsDatalistOpen(false);
  };

  return (
    <div className={containerClasses}>
      <div className={classes.textAndSelectBox}>
        <div className={classes.textAndSelectLabel}>{label}</div>
        <div className={classes.textAndSelectInputsBox}>
          <input
            type="text"
            name="data"
            className={classes.textAndSelectInput}
            id={`input${id}`}
            list={`datalist${id}`}
            onChange={handleSelectChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          <button
            className={classes.textAndSelectOpenButton}
            onClick={handleOpenDatalist}
            aria-label="Open Options"
          >
            {isDatalistOpen ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
          <ul
            id={`datalist${id}`}
            className={classes.textAndSelectDatalistBox}
            style={{ display: isDatalistOpen ? 'block' : 'none' }}
          >
            {options.map((option, index) => {
              if (index === 0) {
                return (
                  <li
                    key={'li' + index + option}
                    className={classes.textAndSelectDatalistOption}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <div className={classes.textAndSelectMaxMinBox}>
                      <p>
                        {option}
                        <sup className={classes.textAndSelectSup}>
                          {optionsUnit}
                        </sup>
                      </p>
                      <sub className={classes.textAndSelectSub}>
                        Min. Allowed
                      </sub>
                    </div>
                  </li>
                );
              } else if (index === options.length - 1) {
                return (
                  <li
                    key={'li' + index + option}
                    className={classes.textAndSelectDatalistOption}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <div className={classes.textAndSelectMaxMinBox}>
                      <p>
                        {option}
                        <sup className={classes.textAndSelectSup}>
                          {optionsUnit}
                        </sup>
                      </p>
                      <sub className={classes.textAndSelectSub}>
                        Max. Allowed
                      </sub>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={'li' + index + option}
                    className={classes.textAndSelectDatalistOption}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                    <sup className={classes.textAndSelectSup}>
                      {optionsUnit}
                    </sup>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextAndSelect;
