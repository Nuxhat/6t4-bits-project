import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  variant?: "stacked" | "horizontal" | "icon";
  showText?: boolean;
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
     
      className={className}
      style={{
        width: width ? `${width}px` : "100%",
        height: "auto",
        objectFit: "contain",
      }}
    />
  );
};