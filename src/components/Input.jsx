export default function Input({label, ...props}) {
  return (
    <>
      <label className="text-amber-400 font-bold">{label}</label>
      <input {...props} className="rounded-lg border-2 border-slate-600 bg-slate-800 p-1 mb-4 focus:border-amber-400 focus:outline-none" />
    </>
  );
}
