import React from 'react';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextAndSelect from './inputs/TextAndSelect';
import MonthlyPayment from './MonthlyPayment';

import styles from './loanFormStyles';

const useStyles = createUseStyles(styles);

const LoanForm = () => {
  const classes = useStyles();
  return (
    <Container className="mb-4">
      <Row className="mb-3">
        <Col></Col>
        <Col md={10} lg={10} xl={8}>
          <div className={classes.loanFormBox}>
            <div className={classes.showFormIcon}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <p className={classes.loanFormParagraph}>Your loan application</p>
            <span className={classes.loanFormBoxSpan}>
              2700<sup className={classes.loanFormBoxSup}>€</sup> / 36 months
            </span>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={10} lg={10} xl={8}>
          <div className={classes.loanFormBox}>
            <div className={classes.closeFormIcon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <TextAndSelect
              label="Amount"
              id="Amount"
              options={[200, 250, 300, 2700, 5000, 8500, 9000, 10000]}
              optionsUnit=" €"
            />
            <TextAndSelect
              label="Duration"
              id="Duration"
              options={[3, 6, 12, 24, 36]}
              optionsUnit=" months"
            />
            <MonthlyPayment />
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LoanForm;
