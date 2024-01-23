import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './monthlyPaymentStyles';

const useStyles = createUseStyles(styles);

const MonthlyPayment = ({ className }) => {
  const classes = useStyles();
  const containerClasses = classNames(className);
  return (
    <div className={containerClasses}>
      <div className={classes.mpBox}>
        <p className={classes.mpParagraph}>
          MonthlyPayment
          <span className={classes.mpSpan}>
            95,27<sup className={classes.mpSup}>€</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MonthlyPayment;
