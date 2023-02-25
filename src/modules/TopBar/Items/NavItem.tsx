interface props {
  to: string;
  name: string;
  hoveredElement: null | number;
  setHoveredElement: CallableFunction;
  id: number;
}

export function NavItem(props: props) {
  return (
    <li
      className={`${
        props.hoveredElement !== null && props.hoveredElement !== props.id
          ? "tb-transp-nav-link"
          : ""
      } tb-nav-item`}
      onMouseEnter={() => {
        props.setHoveredElement(props.id);
      }}
      onMouseLeave={() => props.setHoveredElement(null)}
    >
      <a href={props.to} className="tb-nav-link">
        {props.name}
      </a>
    </li>
  );
}
