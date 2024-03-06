export default function LoadingSkeleton() {
  const numberOfSkeletons = 3;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-7 sm:py-10 px-6">
      {Array.from({ length: numberOfSkeletons }, (_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-300 h-[350px] rounded-md"
        />
      ))}
    </div>
  );
}
