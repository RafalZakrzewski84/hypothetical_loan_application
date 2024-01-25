import commonStyles from '../../constants/commonStyles';
import sizes from '../../constants/sizes';

const basicStyles = {
  label: {
    '& svg': {
      width: '1.2rem',
      height: '1.2rem',
    },
    [sizes.up('lg')]: {
      marginRight: commonStyles.margins.xs,
      '& svg': {
        width: '0.75rem',
        height: '0.75rem',
      },
    },
  },
};

const styles = {
  resizableInput: {
    ...commonStyles.typographies.typography6,
    marginRight: commonStyles.margins.md,
    paddingBottom: commonStyles.margins.sm,
    '& input': {
      padding: 0,
      paddingBottom: '0.1rem',
      color: commonStyles.colors.bwTundra,
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 0,
      borderBottom: commonStyles.borders.inputResizable,
      outline: 'none',
      transition: commonStyles.transitions.medium,
    },
    '& input:hover': {
      borderColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryRoyalPurple,
    },
    '& input:focus': {
      borderColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryRoyalPurple,
    },
    [sizes.up('lg')]: {
      ...commonStyles.typographies.typography2,
      paddingBottom: 0,
    },
  },

  label: {
    ...basicStyles.label,
    marginRight: commonStyles.margins.sm,
    color: commonStyles.colors.grey3,
  },

  labelHoverAndActive: {
    ...basicStyles.label,
    color: commonStyles.colors.primaryRoyalPurple,
    marginRight: commonStyles.margins.sm,
  },
};

export default styles;
