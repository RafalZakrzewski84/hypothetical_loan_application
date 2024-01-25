const sizes = {
  up(size) {
    const sizes = {
      xs: '300px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: '300px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default sizes;
