import { MousePosition } from "../../scripts";

export function Cursor(position: MousePosition) {
  return (
    <div
      className="cursor"
      id="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
}
