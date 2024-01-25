const modalsData = {
  modal1: {
    title: 'PEP',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  modal2: {
    title: 'Beneficiary',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
};

const formInitialValues = {
  amount: 2700,
  duration: 36,
  phone: '+372 5289 6572',
  email: 'anna.tamm@gmail.com',
  country: 'Estonia',
  county: '',
  city: '',
  village: '',
  street: '',
  houseNumber: '',
  apartmentNumber: '',
  postalCode: '',
  manualAddress: false,
  familyMemberIsNotPEP: true,
  relationshipToPEP: '',
  regionOfPEP: '',
  positionOfPEP: '',
  durationOfPEP: '',
  isBeneficiary: false,
  beneficiaryFirstName: 'Anna Maria',
  beneficiaryLastName: 'Tamm Rodriguez Espinosa',
  beneficiaryPersonalIdNumber: '38912052254',
  beneficiaryResidency: '',
  beneficiaryBirthPlace: '',
  beneficiaryBirthDate: '',
  beneficialOwnerIsPEP: false,
  beneficialOwnerPEPRelation: '',
  beneficialOwnerPEPRegion: '',
  beneficialOwnerPEPPosition: '',
  beneficialOwnerPEPDuration: '',
};

export { modalsData, formInitialValues };
