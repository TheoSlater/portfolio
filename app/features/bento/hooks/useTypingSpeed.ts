"use client";

import * as React from "react";

export type TypingSpeedPayload = {
  wpm: number;
  accuracy: number;
  duration: string;
  language: string;
  timestamp: number;
};

const TYPING_SPEED_ENDPOINT = "/api/monkeytype/typing-speed";

export function useTypingSpeed() {
  const [data, setData] = React.useState<TypingSpeedPayload | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const res = await fetch(TYPING_SPEED_ENDPOINT);
        const json = await res.json();
        if (!isMounted) return;

        if (json?.error) {
          setError(new Error(String(json.error)));
          setData(null);
        } else {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error, isLoading };
}
