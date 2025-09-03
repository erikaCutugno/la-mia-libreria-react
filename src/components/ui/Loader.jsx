export default function Loader() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="flex flex-col items-center space-y-4">
        <i className="fa-solid fa-spinner text-6xl text-blue-900 animate-spin"></i>
        <p className="text-xl text-gray-700 font-semibold animate-pulse">
          Caricamento in corso...
        </p>
      </div>
    </div>
  );
}
