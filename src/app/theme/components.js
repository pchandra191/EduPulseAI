const components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      size: "small",
    },
  },
};

export default components;