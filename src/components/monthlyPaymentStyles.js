import commonStyles from '../constants/commonStyles';

const styles = {
  mpBox: {
    color: commonStyles.colors.grey4,
    backgroundColor: commonStyles.colors.deepPurple,
    padding: '5px 10px',
    borderRadius: 50,
  },
  mpParagraph: {
    ...commonStyles.typographies.typography3,
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
