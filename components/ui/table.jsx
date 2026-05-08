export function Table({ className = "", children }) {
  return <table className={`w-full text-left ${className}`}>{children}</table>;
}

export function TableHead({ className = "", children }) {
  return <th className={`px-6 py-4 font-label-sm uppercase tracking-wider ${className}`}>{children}</th>;
}

export function TableCell({ className = "", children }) {
  return <td className={`px-6 py-4 ${className}`}>{children}</td>;
}
