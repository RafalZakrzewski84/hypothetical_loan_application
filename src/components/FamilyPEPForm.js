import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CheckboxInput from './inputs/CheckboxInput';
import InfoIcon from './InfoIcon';
import SelectInputWithLabel from './inputs/SelectInputWithLabel';
import InfoModal from './InfoModal';

import { useGlobalStyles } from '../constants/globalStyles';

const EditableForm = ({
  formName,
  modalTitle,
  modalContent,
  values,
  touched,
  errors,
  onChange,
}) => {
  const globalClasses = useGlobalStyles();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container className="mb-5">
        <Row className="mb-4">
          <Col></Col>
          <Col md={8} lg={6} xl={4}>
            <CheckboxInput
              formName={formName}
              inputId="familyMemberIsNotPEP"
              label="Neither I nor my family member is PEP"
              name="familyMemberIsNotPEP"
              value={values.familyMemberIsNotPEP}
              onChange={onChange}
              isValid={
                touched.familyMemberIsNotPEP && !errors.familyMemberIsNotPEP
              }
              error={errors.familyMemberIsNotPEP}
            >
              <InfoIcon onClick={() => setShowModal(true)} />
            </CheckboxInput>
          </Col>
          <Col></Col>
        </Row>
        {!values.familyMemberIsNotPEP && (
          <>
            <Row className="mb-3">
              <Col></Col>
              <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
                <SelectInputWithLabel
                  formName={formName}
                  inputId="Relationship"
                  label="Relationship to the PEP"
                  selectOptions={[1, 2, 3]}
                  name="relationshipToPEP"
                  value={values.relationshipToPEP}
                  onChange={onChange}
                  isValid={
                    touched.relationshipToPEP && !errors.relationshipToPEP
                  }
                  error={errors.relationshipToPEP}
                />
              </Col>
              <Col md={5} lg={5} xl={4}>
                <SelectInputWithLabel
                  formName={formName}
                  inputId="Region"
                  label="Region"
                  selectOptions={[1, 2, 3]}
                  name="regionOfPEP"
                  value={values.regionOfPEP}
                  onChange={onChange}
                  isValid={touched.regionOfPEP && !errors.regionOfPEP}
                  error={errors.regionOfPEP}
                />
              </Col>
              <Col></Col>
            </Row>
            <Row className="mb-3">
              <Col></Col>
              <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
                <SelectInputWithLabel
                  formName={formName}
                  inputId="Position"
                  label="Position"
                  selectOptions={[1, 2, 3]}
                  name="positionOfPEP"
                  value={values.positionOfPEP}
                  onChange={onChange}
                  isValid={touched.positionOfPEP && !errors.positionOfPEP}
                  error={errors.positionOfPEP}
                />
              </Col>
              <Col md={5} lg={5} xl={4}>
                <SelectInputWithLabel
                  formName={formName}
                  inputId="Duration"
                  label="Duration as PEP or related to a PEP"
                  selectOptions={[1, 2, 3]}
                  name="durationOfPEP"
                  value={values.durationOfPEP}
                  onChange={onChange}
                  isValid={touched.durationOfPEP && !errors.durationOfPEP}
                  error={errors.durationOfPEP}
                />
              </Col>
              <Col></Col>
            </Row>
          </>
        )}
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
