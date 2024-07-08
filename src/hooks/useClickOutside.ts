import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  dep: any
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dep]);
};
export default useClickOutside;
