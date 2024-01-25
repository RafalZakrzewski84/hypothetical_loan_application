import React from 'react';
import { createUseStyles } from 'react-jss';
import * as formik from 'formik';

import Form from 'react-bootstrap/Form';

import Navbar from './components/Navbar';
import LoanForm from './components/LoanForm';
import ContactInfoForm from './components/ContactInfoForm';
import PersonalInformationForm from './components/PersonalInformationForm';
import FormButton from './components/FormButton';
import FamilyPEPForm from './components/FamilyPEPForm';
import BeneficiaryForm from './components/BeneficiaryForm';

import styles from './appStyles';

import schema from './utils/formValidationSchema';
import { modalsData, formInitialValues } from './constants/formAndModalsValues';

const useStyles = createUseStyles(styles);

function App() {
  const classes = useStyles();
  const { Formik } = formik;

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={formInitialValues}
        isValidating={true}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <div className={classes.app}>
                <LoanForm
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                />
                <ContactInfoForm
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                />
                <PersonalInformationForm
                  formName="personalInfo"
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                />
                <FamilyPEPForm
                  formName="familyPEPForm"
                  modalTitle={modalsData.modal1.title}
                  modalContent={modalsData.modal1.content}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                />
                <BeneficiaryForm
                  formName="beneficiary"
                  modalTitle={modalsData.modal2.title}
                  modalContent={modalsData.modal2.content}
                  values={values}
                  touched={touched}
                  errors={errors}
                  onChange={handleChange}
                />
                <FormButton />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default App;
