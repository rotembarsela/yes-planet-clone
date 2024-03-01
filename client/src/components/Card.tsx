import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

type CardProps = {
  src: string;
  size?: "sm" | "lg";
};

export const Card = ({ src, size = "lg" }: CardProps) => {
  const isLgCardSize = size === "lg";

  return (
    <Link
      to="/imax"
      className={twMerge(
        "inline-block border border-[#323232] rounded cursor-pointer min-w-[300px]",
        isLgCardSize ? "h-[250px]" : "h-[120px]",
      )}
    >
      <img
        src={src}
        alt="card"
        className="w-full h-full rounded opacity-75 transition-opacity duration-700 hover:opacity-100"
        draggable={false}
      />
    </Link>
  );
};
