export default function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="blob blob-1 top-0 -left-48" />
      <div className="blob blob-2 top-1/3 -right-32" />
      <div className="blob blob-3 bottom-0 left-1/4" />
    </div>
  );
}
