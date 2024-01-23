import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CheckboxInput from './inputs/CheckboxInput';
import InfoIcon from './InfoIcon';
import SelectInputWithLabel from './inputs/SelectInputWithLabel';
import InfoModal from './InfoModal';

import styles from './familyPEPFormStyles';

const useStyles = createUseStyles(styles);

const EditableForm = ({ formName, modalTitle, modalContent }) => {
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
              inputId="PEPInFamily"
              label="Neither I nor my family member is PEP"
            >
              <InfoIcon onClick={() => setShowModal(true)} />
            </CheckboxInput>
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

export default EditableForm;
