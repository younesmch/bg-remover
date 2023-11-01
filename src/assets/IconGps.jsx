// icon:gps | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconGps(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
      <path d="M12 17l-1-4-4-1 9-4z" />
    </svg>
  );
}

export default IconGps;
