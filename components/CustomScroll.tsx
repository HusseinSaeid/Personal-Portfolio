"use client";

import { Scrollbar } from "react-scrollbars-custom";

export default function CustomScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Scrollbar
      style={{ height: 500, width: "90%", margin: "0 auto" }}
      trackYProps={{
        style: {
          background: "transparent",
          width: "8px",
        },
      }}
      thumbYProps={{
        style: {
          background: "#FFDD55",
          borderRadius: "6px",
        },
      }}
    >
      {children}
    </Scrollbar>
  );
}
