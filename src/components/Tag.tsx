import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex items-center gap-2 rounded-full border border-lime-400 px-3 py-1 text-lime-400 uppercase",
        className,
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default Tag;
