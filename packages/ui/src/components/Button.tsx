import React, { FC } from "react";

const Button: FC<{ children: React.ReactNode; textColor: string }> = ({
  children,
  textColor,
}) => <button style={{ color: textColor }}>{children}</button>;

export default Button;
