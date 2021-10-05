import { useCallback, useContext } from "react"
import { ThemeSettingContext } from "state/theme"

const useTheme = () => {
  const { themeState, dispatch } = useContext(ThemeSettingContext)

  // const setThemeColor = useCallback((payload) => {
  //   dispatch({ type: 'set_color', payload: payload })
  // })
  // const setThemeFontFamily = useCallback((payload) => {
  //   dispatch({ type: 'set_font_family', payload: payload })
  // })

  const setTheme = useCallback((payload) => {
    dispatch({ type: 'set_theme', payload: payload })
  })

  return {
    themeState,
    setTheme
    // setThemeColor,
    // setThemeFontFamily
  }
}

export default useTheme;