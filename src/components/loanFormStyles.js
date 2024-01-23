import commonStyles from '../constants/commonStyles';

const styles = {
  loanFormBox: {
    width: '100%',
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

  showFormIcon: {
    '& svg': {
      fontSize: '13px',
      position: 'absolute',
      top: 23,
      left: 26,
      cursor: 'pointer',
    },
  },

  closeFormIcon: {
    ...commonStyles.flexContainer,
    position: 'absolute',
    top: 13,
    right: 20,
    cursor: 'pointer',
    width: '31px',
    height: '31px',
    borderRadius: 50,
    backgroundColor: commonStyles.colors.primaryPaleWhite,
    color: commonStyles.colors.primaryRoyalPurple,
    transition: commonStyles.transitions.small,
    '&:hover': {
      boxShadow: commonStyles.shadows.shadowIconHover,
    },
    '& svg': {
      width: '12px',
      height: '12px',
    },
  },
};

export default styles;
