import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputWithLabel from './inputs/InputWithLabel';
import SelectInputWithLabel from './inputs/SelectInputWithLabel';
import CheckboxInput from './inputs/CheckboxInput';

import styles from './personalInformationFormStyles';

const useStyles = createUseStyles(styles);

const PersonalInformationForm = ({ formName }) => {
  const classes = useStyles();

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
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="Country"
              label="Country"
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="CountrySelect"
              label="Country"
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
              inputId="City"
              label="City / Parish"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <SelectInputWithLabel
              formName={formName}
              inputId="Village"
              label="Village / Township"
              selectOptions={[1, 2, 3]}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-4">
          <Col></Col>
          <Col md={5} lg={5} xl={4}>
            <InputWithLabel
              formName={formName}
              inputId="Street"
              label="Street"
            />
          </Col>
          <Col md={5} lg={5} xl={4}>
            <Row>
              <Col>
                <InputWithLabel
                  formName={formName}
                  inputId="House"
                  label="House"
                />
              </Col>
              <Col>
                <InputWithLabel
                  formName={formName}
                  inputId="Apartment"
                  label="Apartment"
                />
              </Col>
              <Col>
                <InputWithLabel
                  formName={formName}
                  inputId="Postal Code"
                  label="Postal Code"
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
                ></CheckboxInput>
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
