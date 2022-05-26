import React from "react";
import "./SectionHeader.css";

function SectionHeader({ title }) {
  return (
    <div>
      <h6 className="section-header">{title}</h6>
    </div>
  );
}

export default SectionHeader;
