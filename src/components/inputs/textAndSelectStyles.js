import commonStyles from '../../constants/commonStyles';
import sizes from '../../constants/sizes';

const styles = {
  textAndSelectBox: {
    paddingBottom: commonStyles.margins.sm,
    position: 'relative',
    [sizes.up('lg')]: {
      ...commonStyles.flexContainer,
      alignItems: 'stretch',
      paddingBottom: 0,
    },
  },

  textAndSelectLabelBox: {
    ...commonStyles.flexContainer,
    paddingBottom: commonStyles.margins.xs,
    justifyContent: 'space-between',
    width: '50%',
    flex: 1,
    [sizes.up('lg')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  },

  textAndSelectLabel: {
    ...commonStyles.typographies.typography12,
    color: commonStyles.colors.grey4,
    flex: 1,
    [sizes.up('lg')]: {
      ...commonStyles.typographies.typography4,
    },
  },

  textAndSelectInfo: {
    ...commonStyles.typographies.typography1,
    color: commonStyles.colors.grey4,
    marginRight: commonStyles.margins.xs,
    marginBottom: commonStyles.margins.xs,
  },

  textAndSelectInfoError: {
    color: commonStyles.colors.stateError,
  },

  textAndSelectInputsBox: {
    position: 'relative',
    flex: 1,
  },

  textAndSelectInput: {
    ...commonStyles.typographies.typography8,
    display: 'inline-block',
    width: '50%',
    color: commonStyles.colors.primaryPaleWhite,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: commonStyles.borders.inputThin,
    paddingLeft: '5px',
    outline: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    transition: commonStyles.transitions.medium,
    '&:hover': {
      borderBottom: commonStyles.borders.inputThick,
    },
    [sizes.up('lg')]: {
      width: '70%',
    },
  },

  textAndSelectInputError: {
    borderBottom: commonStyles.borders.inputThickError,
  },

  textAndSelectOpenButton: {
    marginLeft: commonStyles.margins.xs,
    cursor: 'pointer',
    display: 'inline-box',
    backgroundColor: 'transparent',
    color: commonStyles.colors.primaryPaleWhite,
  },

  textAndSelectDatalistBox: {
    ...commonStyles.typographies.typography5,
    backgroundColor: commonStyles.colors.primaryPaleWhite,
    boxShadow: commonStyles.shadows.optionsBox,
    color: commonStyles.colors.bwTundra,
    borderRadius: '3px',
    overflow: 'hidden',
    zIndex: '1000',
    position: 'absolute',
    top: 25,
    left: 165,
    width: '160px',
    display: 'none',
    [sizes.up('sm')]: {
      top: 5,
      left: 237,
    },
    [sizes.up('md')]: {
      top: 5,
      left: 265,
    },
    [sizes.up('lg')]: {
      top: 30,
      left: 70,
    },
    [sizes.up('xxl')]: {
      top: 30,
      left: 83,
    },
  },

  textAndSelectDatalistOption: {
    padding: '8px',
    cursor: 'pointer',
    transition: commonStyles.transitions.medium,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: commonStyles.colors.secondaryWhiteLilac,
    },
  },

  textAndSelectMaxMinBox: {
    ...commonStyles.flexContainer,
    justifyContent: 'space-between',
    borderBottom: commonStyles.borders.optionsList,
  },

  textAndSelectSup: {
    ...commonStyles.typographies.typography12,
  },

  textAndSelectSub: {
    ...commonStyles.typographies.typography12,
  },
};

export default styles;
