const sizes = {
  up() {},
  down(size) {
    const sizes = {
      xs: '300px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default sizes;
