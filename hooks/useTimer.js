import { useCallback, useContext } from "react";
import { TimeSettingContext } from "state/time";

const useTimer = () => {
  const {state, dispatch} = useContext(TimeSettingContext)

  const setTimeSettingsDispatch = useCallback((payload) => {
    dispatch({type: 'set_time_settings', payload: payload})
  }, [dispatch])

  const setMode = useCallback((payload) => {
    dispatch({type: 'set_mode', payload: payload})
  })

  return {
    state,
    setMode,
    setTimeSettingsDispatch
  }
}

export default useTimer;