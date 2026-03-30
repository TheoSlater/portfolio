import { useRef, useCallback, useEffect } from "react";

interface UseSplitPaneOptions {
  storageKey?: string;
  min?: number;
  max?: number;
  initial?: number;
  direction?: "horizontal" | "vertical";
}

export function useSplitPane({
  storageKey = "split-pane",
  min = 20,
  max = 80,
  initial = 50,
  direction = "horizontal",
}: UseSplitPaneOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paneARef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Set initial position — runs once after mount
  useEffect(() => {
    if (!paneARef.current) return;
    const saved = localStorage.getItem(storageKey);
    const startPct = saved ? parseFloat(saved) : initial;
    paneARef.current.style.flexBasis = startPct + "%";
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onDividerPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      dragging.current = true;
      // Capture keeps events flowing even when pointer leaves the divider
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [],
  );

  // pointermove goes on the CONTAINER so fast drags don't lose tracking
  const onContainerPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging.current || !containerRef.current || !paneARef.current)
        return;
      const rect = containerRef.current.getBoundingClientRect();
      const raw =
        direction === "horizontal"
          ? ((e.clientX - rect.left) / rect.width) * 100
          : ((e.clientY - rect.top) / rect.height) * 100;
      const clamped = Math.min(max, Math.max(min, raw));
      paneARef.current.style.flexBasis = clamped + "%";
    },
    [min, max, direction],
  );

  const onContainerPointerUp = useCallback(() => {
    if (!dragging.current || !paneARef.current) return;
    dragging.current = false;
    const pct = parseFloat(paneARef.current.style.flexBasis);
    localStorage.setItem(storageKey, pct.toFixed(1));
  }, [storageKey]);

  const reset = useCallback(() => {
    if (!paneARef.current) return;
    paneARef.current.style.flexBasis = initial + "%";
    localStorage.removeItem(storageKey);
  }, [storageKey, initial]);

  return {
    containerRef,
    paneARef,
    onDividerPointerDown,
    onContainerPointerMove,
    onContainerPointerUp,
    reset,
  };
}
