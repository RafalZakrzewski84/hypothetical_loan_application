import commonStyles from '../constants/commonStyles';

const styles = {
  button: {
    '& button': {
      width: '100%',
      backgroundColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryPaleWhite,
      ...commonStyles.typographies.typographyBtn,
    },
    '& button:hover': {
      backgroundColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryPaleWhite,
    },
  },
};

export default styles;
