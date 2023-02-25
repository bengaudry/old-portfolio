import { ReactNode } from "react";

interface props {
  img?: {
    path: string;
    alt: string;
  };
  children: ReactNode;
  type: "button" | "link";
  hideArrow?: boolean;
  linkHref?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onBtnClick?: CallableFunction;
}

export function Cta(props: props) {
  return (
    <>
      {props.type === "button" ? (
        <button
          className="cta"
          onClick={() => (props.onBtnClick ? props.onBtnClick() : {})}
        >
          {props.img ? (
            <img
              src={props.img ? props.img?.path : ""}
              alt={props.img ? props.img.alt : ""}
            />
          ) : (
            ""
          )}
          <span>{props.children}</span>
          <img src="../../../public/right-arrow.png" alt="→" />
        </button>
      ) : (
        <a className="cta" href={props.linkHref} target={props.target}>
          {props.img ? (
            <img
              src={props.img ? props.img?.path : ""}
              alt={props.img ? props.img.alt : ""}
            />
          ) : (
            ""
          )}
          <span>{props.children}</span>
          <img src="../../../public/right-arrow.png" alt="→" />
        </a>
      )}
    </>
  );
}
