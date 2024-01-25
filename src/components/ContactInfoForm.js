import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faSquarePhone,
  faPen,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResizableInput from './inputs/ResizableInput';
import FormContainer from './FormContainer';
import ButtonIcon from './ButtonIcon';

import { useGlobalStyles } from '../constants/globalStyles';
import styles from './contactInfoFormStyles';

const useStyles = createUseStyles(styles);

const ContactInfoForm = ({ values, touched, errors, onChange }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [showForm, setShowForm] = useState(false);

  const handleOnClick = event => {
    const excludedElements = ['contactInfoEmail', 'contactInfoPhone'];
    if (excludedElements.includes(event.target.id)) return;
    setShowForm(false);
  };

  return (
    <Container className="mb-5">
      <Row className="mb-2">
        <Col></Col>
        <Col md={10} lg={10} xl={8}>
          <div className={classes.contactInfoContainer}>
            <div className={classes.contactNameSection}>
              <ButtonIcon
                className={classes.showFormButton}
                onClick={() => setShowForm(true)}
              >
                <FontAwesomeIcon icon={faPen} />
              </ButtonIcon>
              <p
                className={classes.contactFullName}
              >{`${values.beneficiaryFirstName} ${values.beneficiaryLastName}`}</p>
            </div>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsItem}>
                <FontAwesomeIcon icon={faUser} />
                <p>{values.beneficiaryPersonalIdNumber}</p>
              </div>
              <div className={classes.contactDetailsItem}>
                <FontAwesomeIcon icon={faSquarePhone} />
                <p>{values.phone}</p>
              </div>
              <div className={classes.contactDetailsItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{values.email}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      {showForm && (
        <FormContainer
          sideOfLabel="left"
          colorLight
          isMoved={showForm}
          onClick={handleOnClick}
        >
          <div className={globalClasses.formContainerTextLabel}>
            <p className={classes.formBoxParagraph}>Change your contact Info</p>
            {!!errors.phone && (
              <p className={classes.formBoxError}>{errors.phone}</p>
            )}
            {!!errors.email && (
              <p className={classes.formBoxError}>{errors.email}</p>
            )}
          </div>
          <div className={globalClasses.formContainerInputsContainer}>
            <ResizableInput
              id="contactInfoPhone"
              type="text"
              placeholder="+372 5289 6572"
              initialWidth={13}
              name="phone"
              value={values.phone}
              onChange={onChange}
              isValid={touched.phone && !errors.phone}
            >
              <FontAwesomeIcon icon={faSquarePhone} />
            </ResizableInput>

            <ResizableInput
              id="contactInfoEmail"
              type="email"
              placeholder="anna.tamm@gmail.com"
              initialWidth={20}
              name="email"
              value={values.email}
              onChange={onChange}
              isValid={touched.email && !errors.email}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </ResizableInput>
          </div>
          <ButtonIcon
            className={classes.closeFormButton}
            onClick={() => setShowForm(false)}
            buttonColor="dark"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonIcon>
        </FormContainer>
      )}
    </Container>
  );
};

export default ContactInfoForm;
