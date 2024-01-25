import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const basicStyles = {
  ...commonStyles.flexContainer,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  width: '31px',
  height: '31px',
  borderRadius: 50,
  transition: commonStyles.transitions.small,
  '& svg': {
    width: '12px',
    height: '12px',
  },
};

const styles = {
  buttonIconLight: {
    ...basicStyles,
    backgroundColor: commonStyles.colors.primaryPaleWhite,
    color: commonStyles.colors.primaryRoyalPurple,
    '&:hover': {
      backgroundColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryPaleWhite,
    },
  },
  buttonIconDark: {
    ...basicStyles,
    backgroundColor: commonStyles.colors.primaryRoyalPurple,
    color: commonStyles.colors.secondaryWhiteLilac,
    '&:hover': {
      backgroundColor: commonStyles.colors.primaryPaleWhite,
      color: commonStyles.colors.primaryRoyalPurple,
    },
  },

  showFormIconContact: {
    right: 15,
  },

  closeFormIconContact: {
    right: 20,
  },
};

export default styles;
