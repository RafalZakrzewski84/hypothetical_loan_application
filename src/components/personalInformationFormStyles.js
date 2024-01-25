import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const styles = {
  paragraphTitle: {
    ...commonStyles.typographies.typography6,
    paddingLeft: commonStyles.margins.sm,
  },
  paragraphOr: {
    ...commonStyles.typographies.typography2,
    color: commonStyles.colors.grey4,
    fontStyle: 'italic',
  },
  line: {
    height: '1px',
    width: '100%',
    backgroundColor: commonStyles.colors.grey4,
  },
  textCenter: {
    '& input': {
      textAlign: 'center',
    },
  },
  textRight: {
    '& input': {
      textAlign: 'right',
    },
  },
};

export default styles;
