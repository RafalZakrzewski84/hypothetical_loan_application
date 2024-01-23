import commonStyles from '../../constants/commonStyles';
import sizes from '../../constants/sizes';

const styles = {
  resizableInput: {
    ...commonStyles.typographies.typography2,
    marginRight: commonStyles.margins.lg,
    '& input': {
      padding: 0,
      paddingBottom: '0.1rem',
      ...commonStyles.typographies.typography2,
      color: commonStyles.colors.bwTundra,
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 0,
      borderBottom: commonStyles.borders.inputResizable,
      outline: 'none',
    },
    '& input:hover': {
      borderColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryRoyalPurple,
    },
    '& input:focus': {
      borderColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryRoyalPurple,
    },
    [sizes.down('lg')]: {
      marginRight: commonStyles.margins.sm,
    },
    [sizes.down('sm')]: {
      marginBottom: commonStyles.margins.xs,
    },
  },
  label: {
    marginRight: commonStyles.margins.xs,
    color: commonStyles.colors.grey3,
  },
  labelHoverAndActive: {
    color: commonStyles.colors.primaryRoyalPurple,
    marginRight: commonStyles.margins.xs,
  },
};

export default styles;
