import { Ref, SyntheticEvent, useEffect } from "react";

export function useClickAway(ref:React.RefObject<HTMLDivElement | null>, callback:()=>void) {
    useEffect(() => {
      
      function handleClickOutside(event:MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node || null)) {
          callback()
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }