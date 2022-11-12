import { useRef, HTMLAttributes, createRef } from 'react';

export function useArrayRef() {
  const refs = useRef<Array<HTMLElement> | null>([]);
  refs.current = [];


  return [refs, (ref: HTMLElement) => ref && refs.current.push(ref)];
}
