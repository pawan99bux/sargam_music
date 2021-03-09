import React from "react";

export const themes = {
  light: {
    theme: "#5a344f",
    subTheme: "#383e56",
    component: {
      backgroundColor: "#c5d7bd",
      color: "#383e56",
    },
    button: {
      onHover: {
        backgroundColor: "#fcda05",
        color: "#191919",
      },
      contained: {
        backgroundColor: "#5a344f",
        color: "#fafafa",
      },
      outlined: {
        backgroundColor: "transparent",
        color: "#191919",
      },
    },
    volume: {
      color: "#5a344f",
    },
  },
  dark: {
    theme: "#4ecca3",
    subTheme: "#a2d5f2",
    component: {
      backgroundColor: "#232931",
      color: "#eeeeee",
    },
    button: {
      onHover: {
        backgroundColor: "#a2d5f2",
        color: "#fafafa",
      },
      contained: {
        backgroundColor: "#07689f",
        color: "black",
      },
      outlined: {
        backgroundColor: "transparent",
        color: "#fafafa",
      },
    },
    volume: {
      color: "#07689f",
    },
  },
};

export const ThemeContext = React.createContext(themes.light);

/*
export const ThemeProvider = (props) => {
    const [theme,setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}*/
