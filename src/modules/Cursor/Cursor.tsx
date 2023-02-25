import { MousePosition } from "../../scripts";

export function Cursor(position: MousePosition) {
  return (
    <div
      className="cursor"
      id="cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    ></div>
  );
}