import { useEffect, useRef } from 'react';
import throttle from "lodash/throttle";

/**
 * @module Main_Hook
 * Hook return
 * @typedef {Array} HookReturn
 * @property {string} HookReturn[0] - container element for swiping
 * @property {string} HookReturn[1] - count on swiping elements
 */

/**
 * hook for creating slider from html node
 * @returns {HookReturn}
 */
const useSwipe = (element, count) => {
  const swipeableRef = useRef({current: element});
  const [swipeIndex, setSwipeIndex] = useState(0);

  const getPositions = () => {
    const { scrollWidth, scrollLeft, offsetWidth } = swipeableRef.current;
    const scrollSize = scrollWidth - offsetWidth;

    return { scrollSize, scrollLeft };
  };

  const onSwiped = throttle((event) => {
    event.stopPropagation();
    const { scrollLeft, scrollSize } = getPositions();
    const index = Math.round((scrollLeft / scrollSize) * (count - 1));
    setSwipeIndex(index);
  }, 500);


  useEffect(() => {
    if (swipeableRef.current?.addEventListener) {
        swipeableRef.current.addEventListener("scroll", onSwiped);
    }
    return () => swipeableRef.current?.removeEventListener?.("scroll", onSwiped);
  }, [swipeableRef.current]);

  return swipeIndex;
}

export default useSwipe;
