import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const styles = {
  contactInfoContainer: {
    ...commonStyles.flexContainer,
    flexDirection: 'column',
    width: '100%',
    border: commonStyles.borders.border1,
    color: commonStyles.colors.bwTundra,
    height: '105px',
    borderRadius: 25,
    overflow: 'hidden',
  },
  contactNameSection: {
    ...commonStyles.flexContainer,
    backgroundColor: commonStyles.colors.secondaryWhiteLilac,
    width: '100%',
    height: '50%',
    position: 'relative',
  },
  contactFullName: {
    ...commonStyles.typographies.typography7,
  },
  showFormButton: {
    right: '15px',
  },
  contactDetails: {
    ...commonStyles.flexContainer,
    height: '50%',
    width: '100%',
  },
  contactDetailsItem: {
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
  formBoxParagraph: {
    color: commonStyles.colors.bwTundra,
    ...commonStyles.typographies.typography6,
    [sizes.up('lg')]: {
      ...commonStyles.typographies.typography3,
    },
  },

  formBoxError: {
    ...commonStyles.typographies.typography1,
    color: commonStyles.colors.stateError,
  },

  closeFormButton: {
    right: '20px',
  },
};

export default styles;
