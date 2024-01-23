import React from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from './components/Navbar';
import LoanForm from './components/LoanForm';
import ContactInfo from './components/ContactInfoForm';
import PersonalInformationForm from './components/PersonalInformationForm';
import FormButton from './components/FormButton';
import FamilyPEPForm from './components/FamilyPEPForm';
import BeneficiaryForm from './components/BeneficiaryForm';

import styles from './appStyles';

const useStyles = createUseStyles(styles);

const modalsData = {
  modal1: {
    title: 'PEP',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  modal2: {
    title: 'Beneficiary',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
};

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navbar />
      <LoanForm />
      <ContactInfo />
      <PersonalInformationForm formName="personalInfo" />
      <FamilyPEPForm
        formName="familyPEPForm"
        modalTitle={modalsData.modal1.title}
        modalContent={modalsData.modal1.content}
      />
      <BeneficiaryForm
        formName="beneficiary"
        modalTitle={modalsData.modal2.title}
        modalContent={modalsData.modal2.content}
      />
      <FormButton />
      <Container className="mb-4">
        <Row className="mb-4">
          <Col className={classes.col}>free</Col>
          <Col className={classes.col} md={10} lg={10} xl={8}>
            Loan and contact
          </Col>
          <Col className={classes.col}>free</Col>
        </Row>
        <Row className="mb-4">
          <Col className={classes.col}>free</Col>
          <Col className={classes.col} md={5} lg={5} xl={4}>
            inputs
          </Col>
          <Col className={classes.col} md={5} lg={5} xl={4}>
            inputs
          </Col>
          <Col className={classes.col}>free</Col>
        </Row>
        <Row className="mb-3">
          <Col className={classes.col}>1</Col>
          <Col className={classes.col} md={8} lg={8} xl={6}>
            <Row>
              <Col className={classes.col}></Col>
              <Col className={classes.col}>or</Col>
              <Col className={classes.col}></Col>
            </Row>
          </Col>
          <Col className={classes.col}>1</Col>
        </Row>
        <Row className="mb-3">
          <Col className={classes.col}>1</Col>
          <Col className={classes.col} md={8} lg={8} xl={6}>
            <Row>
              <Col className={classes.col}>checkbox</Col>
            </Row>
          </Col>
          <Col className={classes.col}>1</Col>
        </Row>
        <Row className="mb-3">
          <Col className={classes.col}>1</Col>
          <Col className={classes.col} md={8} lg={8} xl={6}>
            <Row>
              <Col className={classes.col}>line</Col>
            </Row>
          </Col>
          <Col className={classes.col}>1</Col>
        </Row>
        <Row className="mb-4">
          <Col className={classes.col}>free</Col>
          <Col className={classes.col} md={8} lg={6} xl={4}>
            checkbox and button
          </Col>
          <Col className={classes.col}>free</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
