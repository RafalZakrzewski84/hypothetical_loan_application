import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InfoModal from './InfoModal';
import CheckboxInput from './inputs/CheckboxInput';
import InputWithLabel from './inputs/InputWithLabel';
import SelectInputWithLabel from './inputs/SelectInputWithLabel';
import InfoIcon from './InfoIcon';

import styles from './beneficiaryFormStyles';

const useStyles = createUseStyles(styles);

const BeneficiaryForm = ({ formName, modalTitle, modalContent }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container className="mb-5">
        <Row className="mb-4">
          <Col></Col>
          <Col md={8} lg={6} xl={4}>
            <CheckboxInput
              formName={formName}
              inputId="UltimateBeneficiary"
              label="I'm the ultimate beneficiary"
            >
              <InfoIcon onClick={() => setShowModal(true)} />
            </CheckboxInput>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="First Name"
              label="First Name"
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="Last Name"
              label="Last Name"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="Personal ID code"
              label="Personal ID code"
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="Residency"
              label="Residency"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="Birth Place"
              label="Birth Place"
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="Birth Date"
              label="Birth Date"
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row className="mb-4">
          <Col></Col>
          <Col md={8} lg={6} xl={4}>
            <CheckboxInput
              formName={formName}
              inputId="BeneficialPEP"
              label="The beneficial owner is not a PEP"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="Relationship"
              label="Relationship to the PEP"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="Region"
              label="Region"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="Position"
              label="Position"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="Duration"
              label="Duration as PEP or related to a PEP"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <InfoModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={modalTitle}
        content={modalContent}
      />
    </>
  );
};

export default BeneficiaryForm;
