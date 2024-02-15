import React, { useRef, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './resizableInputStyles';

const useStyles = createUseStyles(styles);

const ResizableInput = ({
  id,
  type,
  placeholder,
  children,
  onChange,
  initialWidth = 12,
  className,
  name,
  value,
  isValid,
}) => {
  const classes = useStyles();
  const containerClasses = classNames(classes.resizableInput, className);

  const inputRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  useEffect(() => {
    const currentInput = inputRef.current;

    const resizeInput = () => {
      const INITIAL_INPUT_WIDTH = initialWidth;
      if (currentInput) {
        currentInput.style.width =
          Math.max(INITIAL_INPUT_WIDTH, currentInput.value.length) + 'ch';
      }
    };

    if (currentInput) {
      currentInput.addEventListener('input', resizeInput);
      resizeInput(); // Immediately resize the input
    }

    return () => {
      if (currentInput) {
        currentInput.removeEventListener('input', resizeInput);
      }
    };
  }, [inputRef, initialWidth]);

  return (
    <div className={containerClasses}>
      <label
        htmlFor={id}
        className={
          isHovered || isInputActive
            ? classes.labelHoverAndActive
            : classes.label
        }
      >
        {children}
      </label>
      <input
        id={id}
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        value={value}
      />
    </div>
  );
};

export default ResizableInput;
