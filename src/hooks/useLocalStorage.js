import { useEffect, useState } from "react";

const useLocalStorage = (
  defaultValue,
  key,
  deserialize = JSON.parse,
  sereliaze = JSON.stringify
) => {
  const [state, setState] = useState(
    () => deserialize(window.localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, sereliaze(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
