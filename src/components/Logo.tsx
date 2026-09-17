import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => {
  const getWidth = () => {
    switch (size) {
      case "sm":
        return 120;
      case "lg":
        return 200;
      case "xl":
        return 260;
      case "custom":
        return undefined;
      default:
        return 156;
    }
  };

  const width = getWidth();

  return (
    <img
      src="/New%20logo.png"
      alt="Logo"
      className={className}
      style={{
        width: width ? `${width}px` : "auto",
        height: "auto",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
};