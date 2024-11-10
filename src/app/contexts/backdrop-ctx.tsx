"use client"

import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";

export const BackdropCtx = createContext<[boolean, (v: boolean | ((p: boolean) => boolean)) => void] | null>(null)

export default function BackdropProvider({ children }: { children: ReactNode }) {
  const visibleState = useState(false);
  return <BackdropCtx.Provider value={visibleState}>{children}</BackdropCtx.Provider>
}

export function useCheckBackdropVisibility(visibility: boolean) {
  const backdropVisibleState = useContext(BackdropCtx);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (backdropVisibleState)
      setMatch(backdropVisibleState[0] === visibility);
  }, [backdropVisibleState]);

  return match;
}