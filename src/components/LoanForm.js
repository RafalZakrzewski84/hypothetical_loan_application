import React, { useState } from 'react';
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
import FormContainer from './FormContainer';
import ButtonIcon from './ButtonIcon';

import { useGlobalStyles } from '../constants/globalStyles';
import styles from './loanFormStyles';

const useStyles = createUseStyles(styles);

const LoanForm = ({ values, touched, errors, onChange }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [showForm, setShowForm] = useState(false);

  return (
    <Container className="mb-4">
      <Row className="mb-2">
        <Col></Col>
        <Col md={10} lg={10} xl={8}>
          <div className={classes.loanFormInfoContainer}>
            <ButtonIcon
              className={classes.showFormButton}
              buttonColor="dark"
              onClick={event => {
                event.stopPropagation();
                setShowForm(true);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </ButtonIcon>
            <p className={classes.loanFormParagraph}>Your loan application</p>
            <span className={classes.loanFormBoxSpan}>
              {values.amount}
              <sup className={classes.loanFormBoxSup}>€</sup>
              {` / ${values.duration} months`}
            </span>
          </div>
        </Col>
        <Col></Col>
      </Row>
      {showForm && (
        <FormContainer
          isMoved={showForm}
          onClose={() => setShowForm(false)}
          closeOnOutsideClick
        >
          <ButtonIcon
            className={classes.closeFormButton}
            onClick={() => setShowForm(false)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonIcon>
          <div className={globalClasses.formContainerInputsContainer}>
            <TextAndSelect
              label="Amount"
              id="amount"
              options={[200, 250, 300, 2700, 5000, 8500, 9000, 10000]}
              optionsUnit="€"
              showUnits
              name="amount"
              value={values.amount}
              onChange={onChange}
              isValid={touched.amount && !errors.amount}
              error={errors.amount}
            />
            <TextAndSelect
              label="Duration"
              id="duration"
              options={[3, 6, 12, 24, 36]}
              optionsUnit="Months"
              showUnits={false}
              name="duration"
              value={values.duration}
              onChange={onChange}
              isValid={touched.duration && !errors.duration}
              error={errors.duration}
            />
          </div>
          <MonthlyPayment
            className={globalClasses.formContainerTextLabel}
            text="Monthly Payment"
            helpText="95,27 "
            supText="€"
          />
        </FormContainer>
      )}
    </Container>
  );
};

export default LoanForm;
