import commonStyles from '../constants/commonStyles';

const styles = {
  loanFormInfoContainer: {
    backgroundColor: commonStyles.colors.primaryRoyalPurple,
    color: commonStyles.colors.primaryPaleWhite,
    height: '58px',
    borderRadius: 50,
    ...commonStyles.flexContainer,
    position: 'relative',
  },

  loanFormParagraph: {
    ...commonStyles.typographies.typography9,
    marginRight: commonStyles.margins.md,
  },

  loanFormBoxSpan: {
    ...commonStyles.typographies.typography5,
  },

  loanFormBoxSup: {
    ...commonStyles.typographies.typography12,
  },

  showFormButton: {
    backgroundColor: 'transparent',
    fontSize: '13px',
    left: 26,
    '&:hover': {
      backgroundColor: 'transparent',
      color: commonStyles.colors.primaryPaleWhite,
    },
  },

  closeFormButton: {
    right: 20,
    '&:hover': {
      boxShadow: commonStyles.shadows.shadowIconHover,
      backgroundColor: commonStyles.colors.primaryPaleWhite,
      color: commonStyles.colors.primaryRoyalPurple,
    },
  },
};

export default styles;
