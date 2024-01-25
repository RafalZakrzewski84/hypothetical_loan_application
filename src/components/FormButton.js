import React from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './formButtonStyles';

const useStyles = createUseStyles(styles);

const FormButton = () => {
  const classes = useStyles();

  return (
    <Container className="mb-5">
      <Row>
        <Col></Col>
        <Col md={8} lg={6} xl={4}>
          <div className={classes.button}>
            <Button variant="flat" size="lg" type="submit">
              Continue
            </Button>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default FormButton;
