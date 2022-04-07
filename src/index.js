import { useEffect } from 'react';

/**
 * @module Main_Hook
 * Hook return
 * @typedef {Array} HookReturn
 * @property {string} HookReturn[0] - container element for swiping
 * @property {string} HookReturn[1] - callback on swiping
 */

/**
 * hook for creating slider from html node
 * @returns {HookReturn}
 */
const useSwipe = (element, callback) => {

  useEffect(() => {

    const onTouchStart = () => {
      callback();
    }
    const onTouchMove = () => {
      callback();
    }
    const onTouchEnd = () => {
      callback();
    }

    if (element !== null) {
      element.addEventListener('touchstart', onTouchStart);
      element.addEventListener('touchmove', onTouchMove);
      element.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      if (element !== null) {
        console.log('useSwipe useEffect return...');
        element.removeEventListener('touchstart', onTouchStart);
        element.removeEventListener('touchmove', onTouchMove);
        element.removeEventListener('touchend', onTouchEnd);
      }
    };
  });
}

export default useSwipe;
