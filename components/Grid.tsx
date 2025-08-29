import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import React from "react";

interface GridProps {
  className?: string;
  children?: React.ReactNode;
}

const Grid = ({ className = "", children }: GridProps) => {
  return (
    <div
      className={cn(
        "relative flex size-full items-center justify-center overflow-hidden z-0 rounded-lg  bg-[#FFDD55] p-20",
        className
      )}
    >
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"0"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      {children}
    </div>
  );
};

export default Grid;
