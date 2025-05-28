'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-6 text-center text-red-600">
      <h2 className="text-xl font-semibold">Unexpected Error</h2>
      <p>{error.message}</p>
    </div>
  );
}