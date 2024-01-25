import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const basicStyles = {
  formSection: {
    display: 'flex',
    width: '90%',
    [sizes.up('lg')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 25,
    position: 'relative',
  },
  [sizes.up('lg')]: {
    borderRadius: 50,
  },
};

const styles = {
  formContainer: {
    ...basicStyles.formContainer,
    backgroundColor: commonStyles.colors.primaryRoyalPurple,
  },
  formContainerLight: {
    ...basicStyles.formContainer,
    backgroundColor: commonStyles.colors.secondaryWhiteLilac,
  },
  formSectionRight: {
    flexDirection: 'column-reverse',
    ...basicStyles.formSection,
  },
  formSectionLeft: {
    flexDirection: 'column',
    ...basicStyles.formSection,
  },
};

export default styles;
