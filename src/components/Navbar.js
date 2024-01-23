import React from 'react';
import { createUseStyles } from 'react-jss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InBank_logo from '../assets/InBank_logo.svg';
import hamburger from '../assets/hamburger.svg';
import styles from './navbarStyles';

const useStyles = createUseStyles(styles);

const Navbar = () => {
  const classes = useStyles();
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Col></Col>
        <Col xs={6} lg={10} xxl={7}>
          <div className={classes.logo}>
            <img src={InBank_logo} className="App-logo" alt="logo" />
          </div>
        </Col>
        <Col>
          <div className={classes.hamburger}>
            <img src={hamburger} className="App-logo" alt="logo" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
