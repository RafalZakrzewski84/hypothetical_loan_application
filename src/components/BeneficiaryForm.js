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

import { useGlobalStyles } from '../constants/globalStyles';
import styles from './beneficiaryFormStyles';

const useStyles = createUseStyles(styles);

const BeneficiaryForm = ({
  formName,
  modalTitle,
  modalContent,
  values,
  touched,
  errors,
  onChange,
}) => {
  const classes = useStyles();
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
              inputId="UltimateBeneficiary"
              label="I'm the ultimate beneficiary"
              name="isBeneficiary"
              value={values.isBeneficiary}
              onChange={onChange}
              isValid={touched.isBeneficiary && !errors.isBeneficiary}
              error={errors.isBeneficiary}
            >
              <InfoIcon onClick={() => setShowModal(true)} />
            </CheckboxInput>
          </Col>
          <Col></Col>
        </Row>
        {values.isBeneficiary && (
          <>
            <Row className="mb-3">
              <Col></Col>
              <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
                <InputWithLabel
                  formName={formName}
                  inputId="First Name"
                  label="First Name"
                  name="beneficiaryFirstName"
                  value={values.beneficiaryFirstName}
                  onChange={onChange}
                  isValid={
                    touched.beneficiaryFirstName && !errors.beneficiaryFirstName
                  }
                  error={errors.beneficiaryFirstName}
                />
              </Col>
              <Col md={5} lg={5} xl={4}>
                <InputWithLabel
                  formName={formName}
                  inputId="Last Name"
                  label="Last Name"
                  name="beneficiaryLastName"
                  value={values.beneficiaryLastName}
                  onChange={onChange}
                  isValid={
                    touched.beneficiaryLastName && !errors.beneficiaryLastName
                  }
                  error={errors.beneficiaryLastName}
                />
              </Col>
              <Col></Col>
            </Row>
            <Row className="mb-3">
              <Col></Col>
              <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
                <InputWithLabel
                  formName={formName}
                  inputId="Personal ID code"
                  label="Personal ID code"
                  name="beneficiaryPersonalIdNumber"
                  value={values.beneficiaryPersonalIdNumber}
                  onChange={onChange}
                  isValid={
                    touched.beneficiaryPersonalIdNumber &&
                    !errors.beneficiaryPersonalIdNumber
                  }
                  error={errors.beneficiaryPersonalIdNumber}
                />
              </Col>
              <Col md={5} lg={5} xl={4}>
                <SelectInputWithLabel
                  formName={formName}
                  inputId="Residency"
                  label="Residency"
                  selectOptions={[1, 2, 3]}
                  name="beneficiaryResidency"
                  value={values.beneficiaryResidency}
                  onChange={onChange}
                  isValid={
                    touched.beneficiaryResidency && !errors.beneficiaryResidency
                  }
                  error={errors.beneficiaryResidency}
                />
              </Col>
              <Col></Col>
            </Row>
            <Row className="mb-3">
              <Col></Col>
              <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
                <InputWithLabel
                  formName={formName}
                  inputId="Birth Place"
                  label="Birth Place"
                  name="beneficiaryBirthPlace"
                  value={values.beneficiaryBirthPlace}
                  onChange={onChange}
                  isValid={
                    touched.beneficiaryBirthPlace &&
                    !errors.beneficiaryBirthPlace
                  }
                  error={errors.beneficiaryBirthPlace}
                />
              </Col>
              <Col md={5} lg={5} xl={4}>
                <InputWithLabel
                  formName={formName}
                  inputId="Birth Date"
                  label="Birth Date"
                  name="beneficiaryBirthDate"
                  value={values.beneficiaryBirthDate}
                  onChange={onChange}
                  isValid={
                    touched.beneficiaryBirthDate && !errors.beneficiaryBirthDate
                  }
                  error={errors.beneficiaryBirthDate}
                />
              </Col>
              <Col></Col>
            </Row>
          </>
        )}
      </Container>
      {values.isBeneficiary && (
        <>
          <Container className="mb-5">
            <Row className="mb-4">
              <Col></Col>
              <Col md={8} lg={6} xl={4}>
                <CheckboxInput
                  formName={formName}
                  inputId="BeneficialPEP"
                  label="The beneficial owner is not a PEP"
                  name="beneficialOwnerIsPEP"
                  value={values.beneficialOwnerIsPEP}
                  onChange={onChange}
                  isValid={
                    touched.beneficialOwnerIsPEP && !errors.beneficialOwnerIsPEP
                  }
                  error={errors.beneficialOwnerIsPEP}
                />
              </Col>
              <Col></Col>
            </Row>
            {!values.beneficialOwnerIsPEP && (
              <>
                <Row className="mb-3">
                  <Col></Col>
                  <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
                    <SelectInputWithLabel
                      formName={formName}
                      inputId="Relationship"
                      label="Relationship to the PEP"
                      selectOptions={[1, 2, 3]}
                      name="beneficialOwnerPEPRelation"
                      value={values.beneficialOwnerPEPRelation}
                      onChange={onChange}
                      isValid={
                        touched.beneficialOwnerPEPRelation &&
                        !errors.beneficialOwnerPEPRelation
                      }
                      error={errors.beneficialOwnerPEPRelation}
                    />
                  </Col>
                  <Col md={5} lg={5} xl={4}>
                    <SelectInputWithLabel
                      formName={formName}
                      inputId="Region"
                      label="Region"
                      selectOptions={[1, 2, 3]}
                      name="beneficialOwnerPEPRegion"
                      value={values.beneficialOwnerPEPRegion}
                      onChange={onChange}
                      isValid={
                        touched.beneficialOwnerPEPRegion &&
                        !errors.beneficialOwnerPEPRegion
                      }
                      error={errors.beneficialOwnerPEPRegion}
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
                      name="beneficialOwnerPEPPosition"
                      value={values.beneficialOwnerPEPPosition}
                      onChange={onChange}
                      isValid={
                        touched.beneficialOwnerPEPPosition &&
                        !errors.beneficialOwnerPEPPosition
                      }
                      error={errors.beneficialOwnerPEPPosition}
                    />
                  </Col>
                  <Col md={5} lg={5} xl={4}>
                    <SelectInputWithLabel
                      formName={formName}
                      inputId="Duration"
                      label="Duration as PEP or related to a PEP"
                      selectOptions={[1, 2, 3]}
                      name="beneficialOwnerPEPDuration"
                      value={values.beneficialOwnerPEPDuration}
                      onChange={onChange}
                      isValid={
                        touched.beneficialOwnerPEPDuration &&
                        !errors.beneficialOwnerPEPDuration
                      }
                      error={errors.beneficialOwnerPEPDuration}
                    />
                  </Col>
                  <Col></Col>
                </Row>
              </>
            )}
          </Container>
        </>
      )}

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
