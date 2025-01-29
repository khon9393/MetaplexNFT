import { useEffect, useRef, useState } from "react";
const LazyImage = (props: any) => {
  const [inView, setInView] = useState(false);

  const placeholderRef = useRef<HTMLImageElement | null>(null);

  function onIntersection(entries: any, opts: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null, // default is the viewport
      threshold: 0, // percentage of target's visible area. Triggers "onIntersection"
      rootMargin: "-50px", // margin around root. Values are similar to CSS margin property
    });

    if (placeholderRef?.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img {...props} alt={props.alt || ""} />
  ) : (
    <img
      {...props}
      ref={placeholderRef}
      src="/placeholder.png"
      alt={props.alt || ""}
    />
  );
};

export default LazyImage;
