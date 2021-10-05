import { useCallback, useContext } from "react";
import { ThemeSettingContext } from "state/theme";

const useTheme = () => {
  const { themeState, dispatch } = useContext(ThemeSettingContext);

  const setTheme = useCallback((payload) => {
    dispatch({ type: "set_theme", payload: payload });
  });

  return {
    themeState,
    setTheme,
  };
};

export default useTheme;
