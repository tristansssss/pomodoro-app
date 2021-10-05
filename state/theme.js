import { useReducer, createContext, useMemo } from "react";

const themeSettingInitialState = {
  color: '#F87070',
  fontFamily: '"Kumbh Sans", sans-serif'
}

function themeSettingReducer(state, action) {
  switch (action.type) {
    case 'set_theme':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const ThemeSettingContext = createContext({
  themeState: themeSettingInitialState,
  dispatch: () => null
})

export const ThemeSettingProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeSettingReducer, themeSettingInitialState);
  return (
    <ThemeSettingContext.Provider value={useMemo(() => ({ themeState, dispatch }), [themeState, dispatch])}>
      {children}
    </ThemeSettingContext.Provider>
  )
}
