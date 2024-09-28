import { cn } from "@/lib/utils";
import { FC } from "react";
import { GradientText } from ".";

interface IProps extends IClassChildren {
  gradient: string;
}
export const SectionTitle: FC<IProps> = ({ children, gradient, className }) => (
  <h1
    className={cn(
      "text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px] font-bold font-space-grotesk text-center",
      className
    )}
  >
    {children} <GradientText>{gradient}</GradientText>
  </h1>
);
