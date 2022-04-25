import React, { useState, useCallback } from "react";

export function SeeMore({ children }) {
  const [isExpanded, setExpanded] = useState(false);
  const [needsShowMore, setNeedsShowMore] = useState(false);
  const maxHeight = 100;

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      const nodeHeight = node.getBoundingClientRect().height;
      if (nodeHeight > maxHeight) setNeedsShowMore(true);
    }
  }, []);

  const handleSeeMore = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      {needsShowMore ? (
        <div id="see-more-component">
          <div className={`text ${isExpanded ? "show-it" : ""}`}>
            {children}
          </div>
          <div className="blur"></div>
          <button id="see-more-button" onClick={handleSeeMore}>
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      ) : (
        <div ref={measuredRef}>{children}</div>
      )}
    </>
  );
}
