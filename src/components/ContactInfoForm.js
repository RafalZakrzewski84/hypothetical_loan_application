import React from 'react';
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

import styles from './contactInfoFormStyles';

const useStyles = createUseStyles(styles);

const LoanForm = () => {
  const classes = useStyles();
  return (
    <Container className="mb-5">
      <Row className="mb-3">
        <Col></Col>
        <Col md={10} lg={10} xl={8}>
          <div className={classes.box}>
            <div className={classes.contactName}>
              <div className={classes.showFormIcon}>
                <FontAwesomeIcon icon={faPen} />
              </div>
              <p>Anna Maria Tamm Rodriguez Espinosa</p>
            </div>
            <div className={classes.contactData}>
              <div className={classes.contactDataItem}>
                <FontAwesomeIcon icon={faUser} />
                <p>38912052254</p>
              </div>
              <div className={classes.contactDataItem}>
                <FontAwesomeIcon icon={faSquarePhone} />
                <p>+372 5289 6572</p>
              </div>
              <div className={classes.contactDataItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>anna.tamm@gmail.com</p>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={10} lg={10} xl={8}>
          <div className={classes.formBox}>
            <div className={classes.closeFormIcon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <p className={classes.formBoxParagraph}>Change your contact Info</p>
            <div className={classes.inputsBox}>
              <div className="d-flex justify-content-center align-items-center">
                <ResizableInput
                  id="contactInfoPhone"
                  type="text"
                  placeholder="+372 5289 6572"
                  initialWidth={13}
                >
                  <FontAwesomeIcon icon={faSquarePhone} />
                </ResizableInput>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <ResizableInput
                  id="contactInfoEmail"
                  type="email"
                  placeholder="anna.tamm@gmail.com"
                  initialWidth={20}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </ResizableInput>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LoanForm;
