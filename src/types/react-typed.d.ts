declare module 'react-typed' {
  import { FC } from 'react';

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    backDelay?: number;
    startDelay?: number;
    fadeOut?: boolean;
    fadeOutDelay?: number;
    smartBackspace?: boolean; // Properti tambahan opsional
    shuffle?: boolean; // Properti tambahan opsional
  }

  const Typed: FC<TypedProps>;
  export default Typed;
}
