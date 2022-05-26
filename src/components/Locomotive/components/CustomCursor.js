import React from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth;
      const mouseY = clientY - cursorRef.current.clientHeight;

      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`;
    });
  });
  return <div className="app-cursor" ref={cursorRef}></div>;
}

export default CustomCursor;
