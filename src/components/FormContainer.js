import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './formContainerStyles';

const useStyles = createUseStyles(styles);

const FormContainer = ({
  className,
  sideOfLabel = 'right',
  colorLight,
  children,
  onClick,
  onClose,
  closeOnOutsideClick,
}) => {
  const classes = useStyles();
  const containerClasses = classNames(className);
  const formContainerRef = useRef(null);

  const sideOfLabelClass =
    sideOfLabel === 'right'
      ? classes.formSectionRight
      : classes.formSectionLeft;

  const formContainerColorLight = colorLight
    ? classes.formContainerLight
    : classes.formContainer;

  useEffect(() => {
    const handleClickOutside = event => {
      event.stopPropagation();
      if (
        closeOnOutsideClick &&
        formContainerRef.current &&
        !formContainerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose, closeOnOutsideClick]);

  return (
    <div className={containerClasses} onClick={onClick} ref={formContainerRef}>
      <Row className="mb-3">
        <Col className={classes.col}></Col>
        <Col className={classes.col} md={10} lg={10} xl={8}>
          <div className={formContainerColorLight}>
            <div className={sideOfLabelClass}>{children}</div>
          </div>
        </Col>
        <Col className={classes.col}></Col>
      </Row>
    </div>
  );
};

export default FormContainer;
