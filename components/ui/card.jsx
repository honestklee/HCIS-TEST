export function Card({ className = "", children }) {
  return (
    <div className={`bg-surface-container-lowest border border-outline-variant/10 rounded-xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}
