import confetti from "canvas-confetti";
import { useCallback, useRef } from "react";

export const useFireConfetti = () => {
  const isBusyRef = useRef(false);

  const fire = useCallback(async () => {
    if (isBusyRef.current) {
      return;
    }
    const end = Date.now() + 500;
    isBusyRef.current = true;
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        isBusyRef.current = false;
      }
    })();
  }, []);
  return fire;
};
