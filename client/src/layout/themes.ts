import { defaultTheme } from "react-admin";

export const darkTheme = {
  palette: {
    primary: {
      main: "#1073FF",
    },
    secondary: {
      main: "#1073FF",
    },
    mode: "dark" as "dark", // Switching the dark mode on is a single property value change.
  },
  sidebar: {
    width: 200,
  },
  // components: {
  //     ...defaultTheme.components,
  //     RaMenuItemLink: {
  //         styleOverrides: {
  //             root: {
  //                 borderLeft: '3px solid #000',
  //                 '&.RaMenuItemLink-active': {
  //                     borderLeft: '3px solid #90caf9',
  //                 },
  //             },
  //         },
  //     },
  //     MuiAppBar: {
  //         styleOverrides: {
  //             colorSecondary: {
  //                 color: '#ffffffb3',
  //                 backgroundColor: '#616161e6',
  //             },
  //         },
  //     },
  // },
};

export const lightTheme = {
  palette: {
    primary: {
      main: "#2520C7",
    },
    secondary: {
      light: "#2520C7",
      main: "#2520C7",
      dark: "#2520C7",
      contrastText: "#fff",
    },
    background: {
      default: "#FFFAFA",
    },
    mode: "light" as "light",
  },
  shape: {
    borderRadius: 10,
  },
  sidebar: {
    width: 200,
  },
  // components: {
  //     ...defaultTheme.components,
  //     RaMenuItemLink: {
  //         styleOverrides: {
  //             root: {
  //                 borderLeft: '3px solid #fff',
  //                 '&.RaMenuItemLink-active': {
  //                     borderLeft: '3px solid #4f3cc9',
  //                 },
  //             },
  //         },
  //     },
  //     MuiPaper: {
  //         styleOverrides: {
  //             elevation1: {
  //                 boxShadow: 'none',
  //             },
  //             root: {
  //                 border: '1px solid #e0e0e3',
  //                 backgroundClip: 'padding-box',
  //             },
  //         },
  //     },
  //     MuiAppBar: {
  //         styleOverrides: {
  //             colorSecondary: {
  //                 color: '#808080',
  //                 backgroundColor: '#fff',
  //             },
  //         },
  //     },
  //     MuiLinearProgress: {
  //         styleOverrides: {
  //             colorPrimary: {
  //                 backgroundColor: '#f5f5f5',
  //             },
  //             barColorPrimary: {
  //                 backgroundColor: '#d7d7d7',
  //             },
  //         },
  //     },
  // },
};
