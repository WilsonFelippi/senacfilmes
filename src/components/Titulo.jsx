export default function Titulo({ titulo }) {
  return (
    <h2 className="font-medium text-lg border-l-4 border-amber-500 leading-5 pl-1 m-2 overflow-hidden whitespace-normal" title={titulo}>
      { titulo }
    </h2>
  );
}
