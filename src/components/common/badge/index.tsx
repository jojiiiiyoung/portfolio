import React from "react";

import "./style.css";

interface IProps {
  text: string;
}

const Badge = ({ text }: IProps): React.ReactElement => (
  <span className="btn-pill">
    <span>{text}</span>
  </span>
);

export default Badge;
