import React from 'react';
import { createUseStyles } from 'react-jss';

import Modal from 'react-bootstrap/Modal';

import styles from './infoModalStyles';

const useStyles = createUseStyles(styles);

const InfoModal = props => {
  const classes = useStyles();

  return (
    <>
      <style type="text/css">
        {`
    .modal-backdrop {
        --bs-backdrop-opacity: 0;
    }

    .modal {
        backdrop-filter: blur(10px);        
    }

    .modal-dialog-centered {
        justify-content: center;        
    }

    .modal-content {
        width: 60%;
        border: none;
        box-shadow: 0px 10px 30px 0px #00000005, 0px 0px 5px 0px #0000000D;
        @media (max-width: 992px) {
            width: 80%;
        }
    }

    .modal-header {
        flex-direction: column-reverse;
        align-items: unset;
        justify-content: unset;
        border-bottom: none;
        padding: 24px;
        padding-bottom: 0;        
    }

    .modal-header .btn-close {
        padding: 0;
        margin: 0;
        width: 23px;
        height: 23px;
        margin-bottom: 40px; 
    }

    .modal-body {
        padding: 24px;
        padding-top: 8px;
        padding-bottom: 96px;
        width: 90%;
    }
    `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={classes.editModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.content}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InfoModal;
