import React, { useState } from "react";

function Tabs({ tabs }) {
  // If no tabs provided
  if (!tabs || tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Tabs Header */}
      <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              background: activeIndex === index ? "#f0f0f0" : "transparent",
              border: "none",
              borderBottom: activeIndex === index ? "2px solid blue" : "none"
            }}
          >
            {tab.title || `Tab ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "20px" }}>
        {tabs[activeIndex]?.content || "No content available"}
      </div>
    </div>
  );
}

export default Tabs;
