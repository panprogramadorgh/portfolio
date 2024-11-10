"use client"

import React, { useState, createContext, ReactNode, useContext, useEffect, useReducer } from "react";

export const BackdropCtx = createContext<[boolean, (v: boolean | ((p: boolean) => boolean)) => void] | null>(null)

export default function BackdropProvider({ children }: { children: ReactNode }) {
  const visibleState = useState(false);
  return <BackdropCtx.Provider value={visibleState}>{children}</BackdropCtx.Provider>
}

interface CheckVisibilityInfo {
  matchesVisibility: boolean;
}

export function useCheckBackdropVisibility(visibility: boolean) {
  const backdropVisibleState = useContext(BackdropCtx);

  const reducer = (state: CheckVisibilityInfo, currentVisibility: boolean) => {
    return (state = ({
      matchesVisibility: currentVisibility === visibility
    }));
  }
  const [match, dispatchMatch] = useReducer(reducer, { matchesVisibility: false });

  useEffect(() => {
    if (backdropVisibleState)
      dispatchMatch(backdropVisibleState[0]);
  }, [backdropVisibleState]);

  return match.matchesVisibility;
}