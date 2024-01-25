import commonStyles from '../../constants/commonStyles';

const styles = {
  customSelect: {
    position: 'relative',
    '& select': {
      paddingLeft: '15px',
      height: '58px',
      color: commonStyles.colors.bwTundra,
      backgroundColor: 'transparent',
      ...commonStyles.typographies.typography6,
      cursor: 'pointer',
    },
    '& select:focus': {
      borderColor: commonStyles.colors.secondaryElectricPurple,
      boxShadow: 'none',
    },
  },
  labelHidden: {
    display: 'none',
  },
  labelVisible: {
    ...commonStyles.typographies.typography4,
    color: commonStyles.colors.bwTundra,
    position: 'absolute',
    padding: '0 5px',
    backgroundColor: commonStyles.colors.primaryPaleWhite,
    top: -12,
    left: 7,
  },
};

export default styles;
