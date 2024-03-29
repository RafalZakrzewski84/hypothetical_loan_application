import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const styles = {
  mpBox: {
    ...commonStyles.flexContainer,
    width: '95%',
    color: commonStyles.colors.grey4,
    backgroundColor: commonStyles.colors.deepPurple,
    padding: '5px 10px',
    borderRadius: 50,
    [sizes.up('lg')]: {
      width: 'auto',
    },
  },
  mpParagraph: {
    ...commonStyles.typographies.typography7,
    [sizes.up('lg')]: {
      ...commonStyles.typographies.typography3,
    },
  },
  mpSpan: {
    ...commonStyles.typographies.typography8,
    marginLeft: commonStyles.margins.xs,
    color: commonStyles.colors.primaryPaleWhite,
  },
  mpSup: {
    ...commonStyles.typographies.typography12,
  },
};

export default styles;
