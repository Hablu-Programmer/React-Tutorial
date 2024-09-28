import { cn } from "@/lib/utils";
import { FC } from "react";

export const GradientText: FC<IClassChildren> = ({ children, className }) => (
  <span
    className={cn(
      "bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent",
      className
    )}
  >
    {children}
  </span>
);
