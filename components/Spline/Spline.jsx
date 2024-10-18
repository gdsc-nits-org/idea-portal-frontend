"use client";

import { useEffect } from "react";

const Spline = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <spline-viewer url="https://prod.spline.design/SCKxJpnz-9D6i2mh/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>
        `,
      }}
    />
  );
};

export default Spline;
