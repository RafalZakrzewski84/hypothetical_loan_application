import commonStyles from '../../constants/commonStyles';

const styles = {
  customInput: {
    position: 'relative',
    '& input': {
      height: '58px',
      paddingLeft: '15px',
      color: commonStyles.colors.bwTundra,
      backgroundColor: 'transparent',
      ...commonStyles.typographies.typography6,
    },
    '& input:focus': {
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
