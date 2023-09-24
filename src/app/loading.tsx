import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  console.log(`Hey`);
  return (
    <main className="grid grid-cols-4 gap-12 m-24 rounded-md">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div
          className="col-span-4 p-8 text-black bg-white md:col-span-2"
          key={id}
        >
          <Skeleton className="w-1/2 h-6 mb-2 bg-gray-200"></Skeleton>
          <Skeleton className="w-1/4 h-6 mb-4 bg-gray-200"></Skeleton>
          <Skeleton className="w-full bg-gray-400 rounded-md h-80"></Skeleton>
        </div>
      ))}
    </main>
  );
}
