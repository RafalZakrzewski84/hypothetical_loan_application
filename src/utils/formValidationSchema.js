import * as yup from 'yup';

const phoneNumberRegex = /^\+\d{1,4}\s\d{4}\s\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = yup.object().shape({
  amount: yup
    .number()
    .min(200, 'Out of range')
    .max(10000, 'Out of range')
    .required('Amount is required'),
  duration: yup.number().required('Duration is required'),
  phone: yup
    .string()
    .matches(phoneNumberRegex, 'Incorrect phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .matches(emailRegex, 'Incorrect email address')
    .required('Email number is required'),
  country: yup.string(),
  county: yup.string(),
  city: yup.string(),
  village: yup.string(),
  street: yup.string(),
  houseNumber: yup.string(),
  apartmentNumber: yup.string(),
  postalCode: yup.string(),
  manualAddress: yup.boolean(),
  familyMemberIsNotPEP: yup.boolean(),
  relationshipToPEP: yup.string(),
  regionOfPEP: yup.string(),
  positionOfPEP: yup.string(),
  durationOfPEP: yup.string(),
  isBeneficiary: yup.boolean(),
  beneficiaryFirstName: yup.string(),
  beneficiaryLastName: yup.string(),
  beneficiaryPersonalIdNumber: yup.string(),
  beneficiaryResidency: yup.string(),
  beneficiaryBirthPlace: yup.string(),
  beneficiaryBirthDate: yup.string(),
  beneficialOwnerIsPEP: yup.boolean(),
  beneficialOwnerPEPRelation: yup.string(),
  beneficialOwnerPEPRegion: yup.string(),
  beneficialOwnerPEPPosition: yup.string(),
  beneficialOwnerPEPDuration: yup.string(),
});

export default schema;
