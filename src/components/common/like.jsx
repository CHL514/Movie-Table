import React from "react";

const Like = ({ onLikeToggle, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={onLikeToggle}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
