export default function StatCard({ icon, badge, title, value, children }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl card-shadow border border-outline-variant/10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-secondary-container/50 rounded-lg">{icon}</div>
        <span className="font-label-sm px-2 py-0.5 rounded-full">{badge}</span>
      </div>
      <p className="font-label-md text-on-surface-variant">{title}</p>
      <h3 className="font-h2 text-on-surface mt-1">{value}</h3>
      {children}
    </div>
  );
}
