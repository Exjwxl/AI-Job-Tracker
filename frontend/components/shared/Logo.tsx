export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
        AI
      </div>

      <div>
        <h1 className="text-lg font-bold">
          AI Job Tracker
        </h1>

        <p className="text-xs text-muted-foreground">
          Career Hub
        </p>
      </div>
    </div>
  );
}