import { useEffect, useState } from "react";
import { Cursor } from "./modules/Cursor/Cursor";
import { MousePosition } from "./scripts";
import { Main } from "./modules/Main/Main";

export function App() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;
      setMousePosition({ x: x, y: y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Cursor x={mousePosition.x} y={mousePosition.y} />
      <Main />
    </>
  );
}
