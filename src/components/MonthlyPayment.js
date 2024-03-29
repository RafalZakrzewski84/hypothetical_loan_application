import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './monthlyPaymentStyles';

const useStyles = createUseStyles(styles);

const MonthlyPayment = ({ text, helpText, supText, className }) => {
  const classes = useStyles();
  const containerClasses = classNames(className);
  return (
    <div className={containerClasses}>
      <div className={classes.mpBox}>
        <p className={classes.mpParagraph}>
          {text}
          <span className={classes.mpSpan}>
            {helpText}
            <sup className={classes.mpSup}>{supText}</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MonthlyPayment;
