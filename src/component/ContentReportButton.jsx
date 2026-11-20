import React from 'react';
import './css/content-report.css';

function ContentReportButton({ title, className = '', onClick }) {
  return (
    <button
      className={`content-report-button ${className}`.trim()}
      type="button"
      aria-label={`Denunciar ${title}`}
      title={`Denunciar ${title}`}
      onClick={onClick}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 21V4" />
        <path d="M5 5c5-3 9 3 14 0v10c-5 3-9-3-14 0" />
      </svg>
    </button>
  );
}

export default ContentReportButton;
