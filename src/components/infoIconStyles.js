import commonStyles from '../constants/commonStyles';

const styles = {
  icon: {
    ...commonStyles.flexContainer,
    position: 'absolute',
    top: 5,
    right: 5,
    cursor: 'pointer',
    width: '18px',
    height: '18px',
    borderRadius: 50,
    border: `1px solid ${commonStyles.colors.primaryRoyalPurple}`,
    backgroundColor: commonStyles.colors.primaryPaleWhite,
    '& svg': {
      width: '10px',
      height: '10px',
    },
  },
};

export default styles;
