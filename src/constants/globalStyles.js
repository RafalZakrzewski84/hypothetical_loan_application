import { createUseStyles } from 'react-jss';
import commonStyles from './commonStyles';
import sizes from './sizes';

export const globalStyles = {
  addMargin: {
    [sizes.down('md')]: {
      marginBottom: commonStyles.margins.md,
    },
  },
  manualInputBorder: {
    '& input': {
      borderColor: commonStyles.colors.secondaryElectricPurple,
    },
  },
  formContainerInputsContainer: {
    flex: 1,
    paddingBottom: commonStyles.margins.sm,
    marginLeft: commonStyles.margins.xl,
    [sizes.up('lg')]: {
      display: 'flex',
      paddingBottom: 0,
    },
  },
  formContainerTextLabel: {
    paddingTop: commonStyles.margins.sm,
    paddingBottom: commonStyles.margins.sm,
    flex: 0.6,
    marginLeft: commonStyles.margins.xl,
    [sizes.up('lg')]: {
      flex: 0.55,
    },
  },
};

export const useGlobalStyles = createUseStyles(globalStyles);
