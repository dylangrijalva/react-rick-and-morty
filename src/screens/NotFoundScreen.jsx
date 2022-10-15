import React from "react";
import "../styles.css";

export function NotFoundScreen() {
  return (
    <div className="not-found-wrapper">
      <div className="title">Not found</div>
      <input
        className="primary-button"
        type="button"
        value="Back to home page"
      />
    </div>
  );
}
