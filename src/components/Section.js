import React, { useState } from "react";
import "../styles/Section.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Section = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section">
      <div className="section-title" onClick={() => setExpanded(!expanded)}>
        {title}
        <div>{expanded ? <FaChevronUp size={'1rem'} /> : <FaChevronDown size={'1rem'} />}</div>
      </div>
      {expanded && <div className="section-content">{children}</div>}
    </div>
  );
};

export default Section;