import React, { useState, useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './textAndSelectStyles';

const useStyles = createUseStyles(styles);

const TextAndSelect = ({
  label,
  id,
  options,
  optionsUnit,
  showUnits,
  className,
  name,
  value,
  onChange,
  isValid,
  error,
}) => {
  const classes = useStyles();
  const containerClasses = classNames(className);
  const [isDatalistOpen, setIsDatalistOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const ulRef = useRef(null);
  const inputRef = useRef(null);

  const handleOpenDatalist = event => {
    event.stopPropagation();
    setIsDatalistOpen(!isDatalistOpen);
  };

  const handleSelectChange = event => {
    onChange(event);
  };

  const handleOnFocus = () => {
    setIsDatalistOpen(false);
    setIsInputFocused(true);
    inputRef.current.value = '';
  };

  const handleOnBlur = () => {
    const inputValue = parseInt(inputRef.current.value, 10);
    const MIN_VALUE = options[0];
    const MAX_VALUE = options[options.length - 1];

    if (isNaN(inputValue)) {
      const syntheticEvent = { target: { name, value: MIN_VALUE } };
      onChange(syntheticEvent);
    } else {
      const clampedValue = Math.min(Math.max(inputValue, MIN_VALUE), MAX_VALUE);
      const syntheticEvent = { target: { name, value: clampedValue } };
      onChange(syntheticEvent);
    }

    setIsInputFocused(false);
  };

  const handleOptionSelect = (option, event) => {
    setIsDatalistOpen(false);
    const syntheticEvent = { target: { name, value: option } };
    onChange(syntheticEvent);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (ulRef.current && !ulRef.current.contains(event.target)) {
        setIsDatalistOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const textAndSelectMessage = !error
    ? `${options[0]} - ${options[options.length - 1]}`
    : error;

  const textAndSelectInfoClass = !error
    ? classes.textAndSelectInfo
    : `${classes.textAndSelectInfo} ${classes.textAndSelectInfoError}`;

  const textAndSelectInputClass = !error
    ? classes.textAndSelectInput
    : `${classes.textAndSelectInput} ${classes.textAndSelectInputError}`;

  return (
    <div className={containerClasses}>
      <div className={classes.textAndSelectBox}>
        <div className={classes.textAndSelectLabelBox}>
          <div className={classes.textAndSelectLabel}>{`${label}`}</div>
          {isInputFocused && (
            <div className={textAndSelectInfoClass}>{textAndSelectMessage}</div>
          )}
        </div>
        <div className={classes.textAndSelectInputsBox}>
          <input
            type="text"
            className={textAndSelectInputClass}
            id={`input${id}`}
            list={`datalist${id}`}
            onChange={handleSelectChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={inputRef}
            name={name}
            value={value}
          />
          <button
            className={classes.textAndSelectOpenButton}
            onClick={handleOpenDatalist}
            aria-label="Open Options"
            type="button"
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
            style={{ display: isDatalistOpen ? 'inline' : 'none' }}
            ref={ulRef}
          >
            {options.map((option, index) => (
              <li
                key={`li${index}${option}`}
                className={classes.textAndSelectDatalistOption}
                onClick={event => handleOptionSelect(option, event)}
              >
                <div
                  className={
                    index === 0 || index === options.length - 1
                      ? classes.textAndSelectMaxMinBox
                      : ''
                  }
                >
                  <p>
                    {option}
                    {showUnits && (
                      <sup className={classes.textAndSelectSup}>
                        {optionsUnit}
                      </sup>
                    )}
                  </p>
                  {index === 0 && (
                    <sub className={classes.textAndSelectSub}>Min. Allowed</sub>
                  )}
                  {index === options.length - 1 && (
                    <sub className={classes.textAndSelectSub}>Max. Allowed</sub>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextAndSelect;
