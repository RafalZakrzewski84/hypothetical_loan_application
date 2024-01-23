import commonStyles from '../../constants/commonStyles';

const styles = {
  customCheckbox: {
    position: 'relative',
    '& div': {
      display: 'flex',
      alignItems: 'center',
    },
    '& label': {
      ...commonStyles.typographies.typography6,
    },
    '& input': {
      width: '24px',
      height: '24px',
      marginTop: 0,
      marginRight: commonStyles.margins.sm,
      borderColor: commonStyles.colors.bwTundra,
    },
    '& input:checked': {
      width: '24px',
      height: '24px',
      marginRight: commonStyles.margins.sm,
      borderColor: commonStyles.colors.secondaryElectricPurple,
      backgroundColor: commonStyles.colors.primaryPaleWhite,
    },
    '& input:focus': {
      borderColor: commonStyles.colors.secondaryElectricPurple,
      boxShadow: 'none',
    },
  },
  customSwitch: {
    position: 'relative',
    '& div': {
      display: 'flex',
      alignItems: 'center',
    },
    '& label': {
      ...commonStyles.typographies.typography6,
    },
    '& input': {
      width: '31px',
      height: '18px',
      marginTop: 0,
      marginRight: commonStyles.margins.sm,
      borderColor: commonStyles.colors.primaryPaleWhite,
      backgroundColor: commonStyles.colors.grey3,
    },
    '& input:focus': {
      boxShadow: 'none',
      borderColor: commonStyles.colors.grey3,
      backgroundColor: commonStyles.colors.grey3,
    },
    '& input:checked': {
      boxShadow: 'none',
      borderColor: commonStyles.colors.success,
      backgroundColor: commonStyles.colors.success,
    },
  },
};

export default styles;
