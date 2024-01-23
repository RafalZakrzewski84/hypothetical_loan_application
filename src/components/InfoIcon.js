import React from 'react';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import styles from './infoIconStyles';

const useStyles = createUseStyles(styles);

const InfoIcon = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.icon} onClick={onClick}>
      <FontAwesomeIcon icon={faInfo} />
    </div>
  );
};

export default InfoIcon;
