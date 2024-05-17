import { memo } from "react";

const BodyBackground = memo(function BodyBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-[1] h-full w-full bg-custom-light bg-contain dark:bg-custom-dark" />
    </>
  );
});

export default BodyBackground;
