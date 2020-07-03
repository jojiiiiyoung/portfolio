import React from "react";

import "./style.css";

interface IProps {
  text: string;
  size?: "small" | "medium";
}

const Badge = ({ text, size = "medium" }: IProps): React.ReactElement => (
  <span className={`btn-pill ${size}`}>
    <span>{text}</span>
  </span>
);

export default Badge;
