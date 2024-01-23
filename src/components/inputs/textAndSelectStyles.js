import commonStyles from '../../constants/commonStyles';

const styles = {
  textAndSelectBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textAndSelectLabel: {
    ...commonStyles.typographies.typography3,
    color: commonStyles.colors.grey4,
    marginRight: commonStyles.margins.xs,
  },

  textAndSelectInputsBox: {
    position: 'relative',
    display: 'flex',
    marginRight: commonStyles.margins.md,
  },

  textAndSelectInput: {
    ...commonStyles.typographies.typography8,
    color: commonStyles.colors.primaryPaleWhite,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: commonStyles.borders.inputThin,
    paddingLeft: '5px',
    outline: 'none',
    width: '110px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: commonStyles.transitions.medium,
    '&:hover': {
      borderBottom: commonStyles.borders.inputThick,
    },
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
    zIndex: '100',
    position: 'absolute',
    top: 30,
    left: 115,
    width: '180px',
    display: 'none',
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
