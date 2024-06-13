export default function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          width="38"
          height="42"
          viewBox="0 0 38 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1539 32.0283L27.2761 29.5849L30.6697 42L19.1539 32.0283ZM37.8462 15.9811H23.5488L19.1539 0L14.7589 15.9811H0.461548L12.033 25.8868L7.63805 41.8679L19.2095 31.9623L26.3304 25.8868L37.8462 15.9811Z"
            fill="#FFB400"
          />
        </svg>
      ) : (
        <svg
          width="38"
          height="42"
          viewBox="0 0 38 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3077 32.0283L27.43 29.5849L30.8235 42L19.3077 32.0283ZM38 15.9811H23.7026L19.3077 0L14.9128 15.9811H0.615387L12.1868 25.8868L7.79189 41.8679L19.3633 31.9623L26.4842 25.8868L38 15.9811Z"
            fill="#808080"
          />
        </svg>
      )}
    </span>
  );
}
