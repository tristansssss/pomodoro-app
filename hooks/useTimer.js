import { useCallback, useContext, useState, useEffect } from "react";
import { TimeSettingContext } from "@state/time";

const useTimer = () => {
  const { state, dispatch } = useContext(TimeSettingContext);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(state[state.mode]);
  const [timeView, setTimeView] = useState({
    minutes: Math.floor(seconds / 60),
    seconds: 0,
  });

  function toggle(a) {
    setIsActive(a);
  }

  function reset() {
    setSeconds(state[state.mode]);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (!isActive || seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    setTimeView({
      minutes: Math.floor(seconds / 60),
      seconds: seconds % 60,
    });
  }, [seconds]);

  useEffect(() => {
    reset();
  }, [state]);

  const setTimeSettingsDispatch = useCallback(
    (payload) => {
      dispatch({ type: "set_time_settings", payload: payload });
    },
    [dispatch]
  );

  const setMode = useCallback((payload) => {
    dispatch({ type: "set_mode", payload: payload });
  });

  return {
    timeView,
    state,
    toggle,
    isActive,
    reset,
    setMode,
    setTimeSettingsDispatch,
    seconds,
  };
};

export default useTimer;
