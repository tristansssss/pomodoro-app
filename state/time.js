import { useReducer, createContext, useMemo } from "react";

const timeSettingInitialState = {
  pomodoro: 1500,
  break: 300,
  longBreak: 900,
  mode: 'pomodoro'
}

function timeSettingReducer(state, action) {
  switch (action.type) {
    case 'set_time_settings':
      return { ...state, ...action.payload }
    case 'set_mode':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export const TimeSettingContext = createContext({
  state: timeSettingInitialState,
  dispatch: () => null
})

export const TimeSettingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timeSettingReducer, timeSettingInitialState);
  return (
    <TimeSettingContext.Provider value={useMemo(() => ({ state, dispatch }), [state, dispatch])}>
      {children}
    </TimeSettingContext.Provider>
  )
}