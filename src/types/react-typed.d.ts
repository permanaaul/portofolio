declare module 'react-typed' {
    import { ComponentType } from 'react';
  
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
    }
  
    const Typed: ComponentType<TypedProps>;
    export default Typed;
  }
  