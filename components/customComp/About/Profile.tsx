import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Profile() {
  return (
    <article className="mx-auto max-w-[1000px] pt-[65px]">
      <h4 className="mb-4 text-3xl">About me</h4>

      <div className="flex gap-5 max-[650px]:flex-col xl:gap-10">
        <div className="flex w-[310px] justify-center overflow-hidden rounded-lg shadow-md shadow-black/15">
          <Image
            src="/assets/images/profile.jpg"
            className="w-[310px] object-contain"
            width={480}
            height={768}
            alt="profile"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h3
            className={cn([
              "w-fit text-4xl max-md:mt-4",
              "bg-gradient-to-tr bg-clip-text text-transparent",
              "from-neutral-600 via-neutral-700 to-neutral-500",
              "dark:from-neutral-500 dark:via-neutral-200 dark:to-neutral-500",
            ])}
          >
            JOËL RALAISON
          </h3>

          <p className="max-w-[550px] leading-7 max-md:text-xl xl:leading-8">
            I&apos;m a self-taught frontend web developer based in Madagascar.
          </p>

          <p className="max-w-[550px] leading-7 max-md:text-xl xl:leading-10">
            I focus on all things web related and my goal is to deliver an
            unique and impactful digital experience for everyone.
          </p>

          <p className="max-w-[550px] leading-7 max-md:text-xl xl:leading-10">
            When I&apos;m not developing, I enjoy spending time with my family
            and friends, reading and learning new things.
          </p>
        </div>
      </div>
    </article>
  );
}
