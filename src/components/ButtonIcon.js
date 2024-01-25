import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './buttonIconStyles';

const useStyles = createUseStyles(styles);

const ButtonIcon = ({
  children,
  buttonColor = 'light',
  className,
  onClick,
}) => {
  const classes = useStyles();
  const buttonColorStyle =
    buttonColor === 'light' ? classes.buttonIconLight : classes.buttonIconDark;

  const buttonStyle = classNames(buttonColorStyle, className);

  return (
    <div className={buttonStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonIcon;
