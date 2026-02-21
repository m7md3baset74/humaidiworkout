"use client";

import { useState } from "react";
import IntroSplash from "./IntroSplash";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && (
        <IntroSplash onFinish={() => setIntroDone(true)} />
      )}

      {introDone && children}
    </>
  );
}