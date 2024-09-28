import { cn } from "@/lib/utils";
import { FC } from "react";

export const Button: FC<IClassChildren> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-3 sm:py-4 px-3.5 sm:px-[25px] bg-gradient-primary opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-full text-xs md:text-base",
        className
      )}
    >
      {children}
    </button>
  );
};
