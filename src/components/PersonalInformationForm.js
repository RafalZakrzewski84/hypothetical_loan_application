import React from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputWithLabel from './inputs/InputWithLabel';
import SelectInputWithLabel from './inputs/SelectInputWithLabel';
import CheckboxInput from './inputs/CheckboxInput';

import { useGlobalStyles } from '../constants/globalStyles';
import styles from './personalInformationFormStyles';

const useStyles = createUseStyles(styles);

const PersonalInformationForm = ({
  formName,
  values,
  touched,
  errors,
  onChange,
}) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <>
      <Container className="mb-5">
        <Row className="mb-4">
          <Col></Col>
          <Col md={10} lg={10} xl={8}>
            <p className={classes.paragraphTitle}>Personal information</p>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
            <InputWithLabel
              formName={formName}
              inputId="Country"
              label="Country"
              name="country"
              value={values.country}
              onChange={onChange}
              isValid={touched.country && !errors.country}
              error={errors.country}
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            {!values.manualAddress ? (
              <SelectInputWithLabel
                formName={formName}
                inputId="County"
                label="County"
                selectOptions={[1, 2, 3]}
                name="county"
                value={values.county}
                onChange={onChange}
                isValid={touched.county && !errors.county}
                error={errors.county}
              />
            ) : (
              <InputWithLabel
                formName={formName}
                inputId="County"
                label="County"
                name="county"
                value={values.county}
                onChange={onChange}
                isValid={touched.county && !errors.county}
                error={errors.county}
                className={
                  values.manualAddress && globalClasses.manualInputBorder
                }
              />
            )}
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
            {!values.manualAddress ? (
              <SelectInputWithLabel
                formName={formName}
                inputId="City"
                label="City / Parish"
                selectOptions={[1, 2, 3]}
                name="city"
                value={values.city}
                onChange={onChange}
                isValid={touched.city && !errors.city}
                error={errors.city}
              />
            ) : (
              <InputWithLabel
                formName={formName}
                inputId="City"
                label="City / Parish"
                name="city"
                value={values.city}
                onChange={onChange}
                isValid={touched.city && !errors.city}
                error={errors.city}
                className={
                  values.manualAddress && globalClasses.manualInputBorder
                }
              />
            )}
          </Col>
          <Col md={5} lg={5} xl={4}>
            {!values.manualAddress ? (
              <SelectInputWithLabel
                formName={formName}
                inputId="Village"
                label="Village / Township"
                selectOptions={[1, 2, 3]}
                name="village"
                value={values.village}
                onChange={onChange}
                isValid={touched.village && !errors.village}
                error={errors.village}
              />
            ) : (
              <InputWithLabel
                formName={formName}
                inputId="Village"
                label="Village / Township"
                name="village"
                value={values.village}
                onChange={onChange}
                isValid={touched.village && !errors.village}
                error={errors.village}
                className={
                  values.manualAddress && globalClasses.manualInputBorder
                }
              />
            )}
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-4">
          <Col></Col>
          <Col md={5} lg={5} xl={4} className={globalClasses.addMargin}>
            <InputWithLabel
              formName={formName}
              inputId="Street"
              label="Street"
              name="street"
              value={values.street}
              onChange={onChange}
              isValid={touched.street && !errors.street}
              error={errors.street}
              className={
                values.manualAddress && globalClasses.manualInputBorder
              }
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <Row>
              <Col>
                <InputWithLabel
                  formName={formName}
                  inputId="House"
                  label="House"
                  name="houseNumber"
                  value={values.houseNumber}
                  onChange={onChange}
                  isValid={touched.houseNumber && !errors.houseNumber}
                  error={errors.houseNumber}
                  className={
                    values.manualAddress && globalClasses.manualInputBorder
                  }
                />
              </Col>
              <Col>
                <InputWithLabel
                  formName={formName}
                  inputId="Apartment"
                  label="Apartment"
                  name="apartmentNumber"
                  value={values.apartmentNumber}
                  onChange={onChange}
                  isValid={touched.apartmentNumber && !errors.apartmentNumber}
                  error={errors.apartmentNumber}
                  className={`${
                    values.manualAddress && globalClasses.manualInputBorder
                  } ${classes.textCenter}`}
                />
              </Col>
              <Col>
                <InputWithLabel
                  formName={formName}
                  inputId="Postal Code"
                  label="Postal Code"
                  name="postalCode"
                  value={values.postalCode}
                  onChange={onChange}
                  isValid={touched.postalCode && !errors.postalCode}
                  error={errors.postalCode}
                  className={`${
                    values.manualAddress && globalClasses.manualInputBorder
                  } ${classes.textRight}`}
                />
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={8} lg={8} xl={6}>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <div className={classes.line}></div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <p className={classes.paragraphOr}>Or</p>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <div className={classes.line}></div>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col md={8} lg={8} xl={6}>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <CheckboxInput
                  formName={formName}
                  inputId="Add address manually"
                  label="Add address manually"
                  inputType="switch"
                  name="manualAddress"
                  value={values.manualAddress}
                  onChange={onChange}
                  isValid={touched.manualAddress && !errors.manualAddress}
                  error={errors.manualAddress}
                />
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md={8} lg={8} xl={6}>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <div className={classes.line}></div>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PersonalInformationForm;
