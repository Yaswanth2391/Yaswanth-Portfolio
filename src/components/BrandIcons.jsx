export function GithubIcon({ size = 18, strokeWidth = 1.8, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.1.1 15 2.2a13.4 13.4 0 0 0-7 0C4.9.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4 5.4 5.4 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4.2-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.43c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.38 1.85V8.5H9.36V20h3.38v-6.4c0-1.69.32-3.32 2.41-3.32 2.06 0 2.09 1.92 2.09 3.43V20H20.6l-.16-6.57Z" />
    </svg>
  );
}
