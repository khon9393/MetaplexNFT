import { useState, useEffect } from 'react';

function useViewportSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.visualViewport?.height || window.innerHeight,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.visualViewport?.height || window.innerHeight,
      });
    };

    window.addEventListener('resize', updateSize);
    window.visualViewport?.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.visualViewport?.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
}

export default useViewportSize;
