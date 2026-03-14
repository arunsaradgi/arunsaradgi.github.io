import { useEffect, useRef } from "react";

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      dot.current.style.left = e.clientX - 4 + "px";
      dot.current.style.top = e.clientY - 4 + "px";
      ring.current.style.left = e.clientX - 16 + "px";
      ring.current.style.top = e.clientY - 16 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className="cursor-follower" />
    </>
  );
};

export default Cursor;
