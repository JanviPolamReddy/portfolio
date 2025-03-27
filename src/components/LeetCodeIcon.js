import React from "react";

const LeetCodeIcon = ({ size = 24 }) => {
  const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";

  return (
    <img
      src={logoUrl}
      alt="LeetCode Logo"
      width={size}
      height={size}
      style={{ filter: "none" }}
    />
  );
};

export default LeetCodeIcon;
