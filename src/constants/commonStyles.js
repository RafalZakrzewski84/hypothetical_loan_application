//font should be Open Sans

const colors = {
  primaryRoyalPurple: '#2B0A57',
  secondaryElectricPurple: '#5948AD',
  deepPurple: '#3A156C',
  grey3: '#9C9C9C',
  grey4: '#DEDEDE',
  grey5: '#E9E9E9',
  primaryPaleWhite: '#FDFDFD',
  secondaryWhiteLilac: '#F8F5FC',
  softLilac: '#F3EEFB',
  stateError: '#EB5757',
  bwTundra: '#413C3C',
  success: '#53CBA0',
};

const commonStyles = {
  colors: {
    ...colors,
  },
  shadows: {
    shadowPurple: `0px 1px 14px 0px ${colors.secondaryElectricPurple}`,
    shadowIconHover: `0px 1px 25px 4px ${colors.secondaryElectricPurple}`,
    optionsBox: '0px 10px 30px 0px #00000005, 0px 0px 5px 0px #0000000D',
  },
  borders: {
    inputThin: `1px solid ${colors.grey4}`,
    inputThick: `1px solid ${colors.primaryPaleWhite}`,
    inputThickError: `1px solid ${colors.stateError}`,
    border1: `5px solid ${colors.softLilac}`,
    inputResizable: `1px solid ${colors.grey3}`,
    optionsList: `1px solid ${colors.bwTundra}`,
  },
  borderLine: {
    normal: '0.5px',
    hover: '1px',
  },
  typographies: {
    typography1: {
      fontSize: '10px',
      fontWeight: 300,
      lineHeight: '10px',
    },
    typography12: {
      fontSize: '12px',
      fontWeight: 300,
      lineHeight: '12px',
    },
    typography2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
    typography3: {
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: '24px',
    },
    typography4: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    typography5: {
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: '24px',
    },
    typography6: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    typography7: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '28px',
    },
    typography8: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    typography9: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '32px',
    },
    typographyBtn: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      textAlign: 'center',
      letterSpacing: '2px',
    },
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margins: {
    xs: '0.25rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
    xxl: '3rem',
  },
  transitions: {
    small: 'all 0.15s ease-in-out',
    medium: 'all 0.3s ease-in-out',
  },
};

export default commonStyles;
