declare module "@splidejs/react-splide" {
  import * as React from "react";

  export interface SplideProps {
    options?: Record<string, unknown>;
    className?: string;
    children?: React.ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}
