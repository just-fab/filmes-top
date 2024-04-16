import "./style.css";

export default function ContentHolder({ csClasses, children }) {
  let classes = csClasses ? csClasses : "d_flex js_center";
  return <div className={`content_holder ${classes}`}>{children}</div>;
}

export function ContentStart({ csClasses, children }) {
  return <div className={`content_holder ${csClasses}`}>{children}</div>;
}
