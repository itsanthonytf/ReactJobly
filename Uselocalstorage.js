import {useState, useEffect} from "react"

// Hook for saving logged in user information, mimicing state.

function useLocalStorage(key, firstValue = null) {
    const INITIAL_VALUE = localStorage.getItem(key) || firstValue;
    const [item, setItem] = useState(INITIAL_VALUE);
  
    useEffect(function setKeyInLocalStorage() {
      console.debug("hooks useLocalStorage useEffect", "item=", item);
  
      if (item === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, item);
      }
    }, [key, item]);
  
    return [item, setItem];
  }
  
  export default useLocalStorage;
