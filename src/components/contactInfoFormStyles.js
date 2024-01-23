import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const styles = {
  box: {
    ...commonStyles.flexContainer,
    flexDirection: 'column',
    width: '100%',
    border: commonStyles.borders.border1,
    color: commonStyles.colors.bwTundra,
    height: '105px',
    borderRadius: 25,
    overflow: 'hidden',
  },
  contactName: {
    ...commonStyles.flexContainer,
    backgroundColor: commonStyles.colors.secondaryWhiteLilac,
    width: '100%',
    height: '50%',
    position: 'relative',
    '& p': {
      ...commonStyles.typographies.typography7,
    },
  },
  showFormIcon: {
    ...commonStyles.flexContainer,
    position: 'absolute',
    top: 8,
    right: 15,
    cursor: 'pointer',
    width: '31px',
    height: '31px',
    borderRadius: 50,
    backgroundColor: commonStyles.colors.primaryPaleWhite,
    color: commonStyles.colors.primaryRoyalPurple,
    transition: commonStyles.transitions.small,
    '&:hover': {
      backgroundColor: commonStyles.colors.primaryRoyalPurple,
      color: commonStyles.colors.primaryPaleWhite,
    },
    '& svg': {
      width: '12px',
      height: '12px',
    },
  },
  contactData: {
    ...commonStyles.flexContainer,
    height: '50%',
    width: '100%',
  },
  contactDataItem: {
    ...commonStyles.flexContainer,
    '&:nth-child(2)': {
      [sizes.down('md')]: {
        margin: `0 ${commonStyles.margins.sm}`,
      },
      margin: `0 ${commonStyles.margins.xl}`,
    },
    '& svg': {
      marginRight: commonStyles.margins.xs,
      color: commonStyles.colors.grey3,
    },
    '& p': {
      ...commonStyles.typographies.typography2,
    },
  },
  formBox: {
    width: '100%',
    backgroundColor: commonStyles.colors.secondaryWhiteLilac,
    height: '58px',
    borderRadius: 50,
    ...commonStyles.flexContainer,
    justifyContent: 'flex-start',
    position: 'relative',
    [sizes.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      height: '68px',
    },
    [sizes.down('sm')]: {
      height: '118px',
      borderRadius: 25,
    },
  },
  closeFormIcon: {
    ...commonStyles.flexContainer,
    position: 'absolute',
    top: 12,
    right: 20,
    cursor: 'pointer',
    width: '31px',
    height: '31px',
    borderRadius: 50,
    backgroundColor: commonStyles.colors.primaryRoyalPurple,
    color: commonStyles.colors.secondaryWhiteLilac,
    transition: commonStyles.transitions.small,
    '&:hover': {
      backgroundColor: commonStyles.colors.primaryPaleWhite,
      color: commonStyles.colors.primaryRoyalPurple,
    },
    '& svg': {
      width: '12px',
      height: '12px',
    },
    [sizes.down('lg')]: {
      top: 17,
    },
    [sizes.down('sm')]: {
      top: 44,
    },
  },
  formBoxParagraph: {
    marginLeft: commonStyles.margins.lg,
    marginRight: commonStyles.margins.xxl,
    color: commonStyles.colors.bwTundra,
    ...commonStyles.typographies.typography3,
    [sizes.down('lg')]: {
      marginRight: commonStyles.margins.sm,
      marginBottom: commonStyles.margins.xs,
      ...commonStyles.typographies.typography2,
    },
    [sizes.down('sm')]: {
      ...commonStyles.typographies.typography3,
    },
  },
  inputsBox: {
    ...commonStyles.flexContainer,
    justifyContent: 'flex-start',
    [sizes.down('lg')]: {
      marginLeft: commonStyles.margins.lg,
    },
    [sizes.down('sm')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
};

export default styles;
