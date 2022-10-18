import { useRef, useMemo } from 'react';
import gsap from 'gsap';

export function useSelector() {
  const ref = useRef<HTMLDivElement | null>(null);
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);

  return [q, ref];
}
