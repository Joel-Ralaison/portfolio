import { Suspense } from "react";

export default function BodyBackground() {
  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 -z-[1] h-full w-full bg-background" />
      }
    >
      <div className="absolute inset-0 -z-[1] h-full w-full bg-custom-light bg-contain dark:bg-custom-dark" />
    </Suspense>
  );
}
