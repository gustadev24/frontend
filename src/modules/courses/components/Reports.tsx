export default function Reports() {
  return (
    <div className="flex items-center justify-start gap-3">
      <button className="px-4 rounded-full bg-secondary py-2 text-sm">
        Export to CSV
      </button>
      <button className="px-4 rounded-full bg-secondary py-2 text-sm">
        Export to PDF
      </button>
    </div>
  );
}
